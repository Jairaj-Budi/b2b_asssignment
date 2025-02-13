export async function up(knex) {
  // Create products table
  await knex.schema.createTable('products', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('description');
    table.decimal('price', 10, 2).notNullable();
    table.integer('stock').notNullable().defaultTo(0);
    table.string('image_url');
    table.timestamps(true, true);
  });

  // Create sales_orders table
  await knex.schema.createTable('sales_orders', (table) => {
    table.increments('id').primary();
    table.string('customer_name').notNullable();
    table.string('customer_email').notNullable();
    table.string('customer_mobile', 20).notNullable();
    table.string('status', 50).notNullable().defaultTo('pending');
    table.decimal('total_amount', 10, 2).notNullable();
    table.timestamps(true, true);
  });

  // Create sales_order_items table
  return knex.schema.createTable('sales_order_items', (table) => {
    table.increments('id').primary();
    table.integer('sales_order_id').references('id').inTable('sales_orders').onDelete('CASCADE');
    table.integer('product_id').references('id').inTable('products');
    table.integer('quantity').notNullable();
    table.decimal('price', 10, 2).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists('sales_order_items');
  await knex.schema.dropTableIfExists('sales_orders');
  return knex.schema.dropTableIfExists('products');
} 