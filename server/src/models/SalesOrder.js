const { Model } = require('objection');

class SalesOrder extends Model {
  static get tableName() {
    return 'sales_orders';
  }

  static get relationMappings() {
    const SalesOrderItem = require('./SalesOrderItem');
    return {
      items: {
        relation: Model.HasManyRelation,
        modelClass: SalesOrderItem,
        join: {
          from: 'sales_orders.id',
          to: 'sales_order_items.sales_order_id'
        }
      }
    };
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['customer_name', 'customer_email', 'customer_mobile', 'total_amount'],
      properties: {
        id: { type: 'integer' },
        customer_name: { type: 'string', minLength: 1, maxLength: 255 },
        customer_email: { type: 'string', format: 'email' },
        customer_mobile: { type: 'string', minLength: 10 },
        status: { type: 'string', default: 'pending' },
        order_date: { type: 'string', format: 'date-time' },
        total_amount: { type: 'number', minimum: 0 },
        created_at: { type: 'string', format: 'date-time' },
        updated_at: { type: 'string', format: 'date-time' }
      }
    };
  }
}

module.exports = SalesOrder; 