import SalesOrder from '../models/SalesOrder.js';
import db from '../config/database.js';

class SalesOrderService {
  async getAllSalesOrders(filters = {}) {
    let query = SalesOrder.query()
      .withGraphFetched('items')
      .orderBy('created_at', 'desc');

    if (filters.customerName) {
      query = query.where('customer_name', 'ilike', `%${filters.customerName}%`);
    }
    if (filters.customerEmail) {
      query = query.where('customer_email', 'ilike', `%${filters.customerEmail}%`);
    }
    if (filters.customerMobile) {
      query = query.where('customer_mobile', 'ilike', `%${filters.customerMobile}%`);
    }
    if (filters.status) {
      query = query.where('status', filters.status);
    }
    if (filters.orderDate) {
      query = query.where('created_at', '>=', filters.orderDate);
    }

    return await query;
  }

  async createSalesOrder(orderData) {
    const order = await SalesOrder.query()
      .insertGraph(orderData, { relate: true });

    // Optional: Send to third-party API
    try {
      await this.notifyThirdPartyAPI(order);
    } catch (error) {
      console.error('Failed to notify third-party API:', error);
    }

    return order;
  }

  async getSalesOrderById(id) {
    return await SalesOrder.query()
      .findById(id)
      .withGraphFetched('items');
  }

  async notifyThirdPartyAPI(order) {
    return await fetch('https://third-party-api.com/salesOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.THIRD_PARTY_API_KEY
      },
      body: JSON.stringify(order)
    });
  }

  async updateSalesOrder(id, data) {
    return await SalesOrder.query()
      .patchAndFetchById(id, data)
      .throwIfNotFound();
  }

  async deleteSalesOrder(id) {
    return await SalesOrder.query()
      .deleteById(id)
      .throwIfNotFound();
  }
}

export default new SalesOrderService(); 