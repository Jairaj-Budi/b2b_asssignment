import SalesOrderService from '../services/SalesOrderService.js';
import { ValidationError } from 'objection';

class SalesOrderController {
  async getAllSalesOrders(req, res) {
    try {
      const filters = {
        customerName: req.query.customerName,
        customerEmail: req.query.customerEmail,
        customerMobile: req.query.customerMobile,
        status: req.query.status,
        orderDate: req.query.orderDate
      };
      
      const orders = await SalesOrderService.getAllSalesOrders(filters);
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createSalesOrder(req, res) {
    try {
      const order = await SalesOrderService.createSalesOrder(req.body);
      res.status(201).json(order);
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ error: error.message });
    }
  }

  async getSalesOrderById(req, res) {
    try {
      const order = await SalesOrderService.getSalesOrderById(req.params.id);
      if (!order) {
        return res.status(404).json({ error: 'Sales order not found' });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateSalesOrder(req, res) {
    try {
      const { id } = req.params;
      const updatedOrder = await SalesOrderService.updateSalesOrder(id, req.body);
      res.json(updatedOrder);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteSalesOrder(req, res) {
    try {
      const { id } = req.params;
      await SalesOrderService.deleteSalesOrder(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new SalesOrderController(); 