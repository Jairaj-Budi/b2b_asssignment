import { Model } from 'objection';

class SalesOrderItem extends Model {
  static get tableName() {
    return 'sales_order_items';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['sales_order_id', 'product_id', 'quantity', 'price'],
      properties: {
        id: { type: 'integer' },
        sales_order_id: { type: 'integer' },
        product_id: { type: 'integer' },
        quantity: { type: 'integer' },
        price: { type: 'number' },
        created_at: { type: 'string', format: 'date-time' }
      }
    };
  }
}

export default SalesOrderItem; 