import Product from '../models/Product.js';
import db from '../config/database.js';

class ProductService {
  async getAllProducts() {
    return await Product.query().orderBy('created_at', 'desc');
  }

  async getProductById(id) {
    return await Product.query().findById(id);
  }

  async createProduct(productData) {
    return await Product.query().insert(productData);
  }

  async updateProduct(id, productData) {
    return await Product.query().patchAndFetchById(id, productData);
  }

  async deleteProduct(id) {
    return await Product.query().deleteById(id);
  }
}

export default new ProductService(); 