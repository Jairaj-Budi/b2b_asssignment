# B2B Sales Platform

A full-stack application for managing B2B sales operations, built with Angular and Node.js/Express with PostgreSQL.

## Project Structure

```
├── src/                    # Frontend Angular application
│   ├── app/
│   │   ├── shared_components/     # Reusable UI components
│   │   ├── models/        # TypeScript interfaces
│   │   ├── pages/         # Route components
│   │   ├── services/      # Angular services
│   │   └── app.component.ts
│   ├── styles.scss        # Global styles
│   └── main.ts
└── server/                # Backend Express application
    ├── src/
    │   ├── config/         # Database and knex configuration
    │   ├── controllers/    # Request handlers
    │   ├── models/        # Objection.js models
    │   ├── routes/        # API routes
    │   ├── services/      # Business logic
    │   ├── migrations/    # Database migrations
    │   └── index.js       # Server entry point
```

## Features

- Product Management (CRUD operations)
- Sales Order Management
- Customer Management
- Search and Filtering
- Responsive Design

## Prerequisites

- Node.js (v16 or higher)
- Docker and Docker Compose
- npm (v9 or higher)

## Environment Variables

### Backend (server/.env)
```
PORT=3000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=sales_db
DB_PASSWORD=postgres
DB_PORT=5432
NODE_ENV=development
```

## Backend Setup

1. **Start PostgreSQL Database**
```bash
cd server
docker-compose up -d
```

2. **Install Dependencies**
```bash
npm install
```

3. **Run Database Migrations**
```bash
npm run migrate
```

4. **Start the Server**
Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Documentation

### Products API

#### GET /api/products
Get all products

Response:
```json
[
  {
    "id": "integer",
    "name": "string",
    "description": "string",
    "price": "number",
    "stock": "number",
    "image_url": "string",
    "created_at": "date",
    "updated_at": "date"
  }
]
```

### Sales Orders API

#### GET /api/sales-orders
Get all sales orders

Query Parameters:
- customerName (string)
- customerEmail (string)
- customerMobile (string)
- status (string)
- orderDate (date)

Response:
```json
[
  {
    "id": "integer",
    "customer_name": "string",
    "customer_email": "string",
    "customer_mobile": "string",
    "status": "string",
    "total_amount": "number",
    "items": [
      {
        "product_id": "integer",
        "quantity": "number",
        "price": "number"
      }
    ]
  }
]
```

## Available API Endpoints

### Products
- `GET /api/products` - List all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Sales Orders
- `GET /api/sales-orders` - List all orders
- `GET /api/sales-orders/:id` - Get single order
- `POST /api/sales-orders` - Create order
- `PUT /api/sales-orders/:id` - Update order
- `DELETE /api/sales-orders/:id` - Delete order

## Database Management

Create new migration:
```bash
npm run migrate:make migration_name
```

Rollback migrations:
```bash
npm run migrate:rollback
```

## Technologies Used

- Express.js - Web framework
- Knex.js - SQL query builder and migrations
- Objection.js - ORM
- PostgreSQL - Database
- Docker - Container platform

## Health Check

Test if the server is running:
```bash
curl http://localhost:3000/health
```

## Development

To stop the database:
```bash
docker-compose down
```

To view database logs:
```bash
docker-compose logs postgres
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License