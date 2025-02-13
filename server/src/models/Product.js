import { Model } from 'objection';

export class Product extends Model {
  static get tableName() {
    return 'products';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'price'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string' },
        price: { type: 'number', minimum: 0 },
        stock: { type: 'integer', minimum: 0 },
        image_url: { type: 'string' },
        created_at: { type: 'string', format: 'date-time' },
        updated_at: { type: 'string', format: 'date-time' }
      }
    };
  }
}

export default Product; 