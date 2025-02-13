export async function up(knex) {
  await knex('products').insert([
    {
      name: "Executive Laptop", // originally "Professional Laptop"
      description: "High-performance business laptop with 16GB RAM and 512GB SSD",
      price: 1299.99,
      stock: 50,
      image_url: "https://picsum.photos/400/300?random=1",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      name: "Ergonomic Desk Chair", // originally "Office Desk Chair"
      description: "Ergonomic office chair with lumbar support and adjustable height",
      price: 299.99,
      stock: 30,
      image_url: "https://picsum.photos/400/300?random=2",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      name: "Wireless Laser Printer", // originally "Wireless Printer"
      description: "Color laser printer with wireless connectivity and duplex printing",
      price: 449.99,
      stock: 25,
      image_url: "https://picsum.photos/400/300?random=3",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      name: "HD Conference Phone", // originally "Conference Phone"
      description: "HD voice quality conference phone with noise reduction",
      price: 199.99,
      stock: 40,
      image_url: "https://picsum.photos/400/300?random=4",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      name: "Electric Standing Desk", // originally "Standing Desk"
      description: "Electric height-adjustable standing desk with memory settings",
      price: 599.99,
      stock: 20,
      image_url: "https://picsum.photos/400/300?random=5",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      name: "High-Speed Document Scanner", // originally "Document Scanner"
      description: "High-speed document scanner with automatic feed",
      price: 349.99,
      stock: 35,
      image_url: "https://picsum.photos/400/300?random=6",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      name: "Gigabit Network Switch", // originally "Network Switch"
      description: "24-port gigabit network switch for business",
      price: 179.99,
      stock: 45,
      image_url: "https://picsum.photos/400/300?random=7",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      name: "Reliable UPS Battery Backup", // originally "UPS Battery Backup"
      description: "1500VA UPS with voltage regulation and LCD display",
      price: 249.99,
      stock: 30,
      image_url: "https://picsum.photos/400/300?random=8",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    }
  ]);
}

export async function down(knex) {
  // Using the unique image URLs to delete just the inserted products
  return knex('products')
    .whereIn('image_url', [
      "https://picsum.photos/400/300?random=1",
      "https://picsum.photos/400/300?random=2",
      "https://picsum.photos/400/300?random=3",
      "https://picsum.photos/400/300?random=4",
      "https://picsum.photos/400/300?random=5",
      "https://picsum.photos/400/300?random=6",
      "https://picsum.photos/400/300?random=7",
      "https://picsum.photos/400/300?random=8"
    ])
    .del();
} 