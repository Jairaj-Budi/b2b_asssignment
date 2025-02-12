# B2B Sales Platform

A full-stack application for managing B2B sales operations, built with Angular, Node.js, Express, and Supabase.

## Project Structure

```
├── src/                    # Frontend Angular application
│   ├── app/
│   │   ├── components/     # Reusable UI components
│   │   ├── models/        # TypeScript interfaces
│   │   ├── pages/         # Route components
│   │   ├── services/      # Angular services
│   │   └── app.component.ts
│   ├── styles.scss        # Global styles
│   └── main.ts
├── server/                # Backend Express application
│   ├── routes/           # API route handlers
│   └── index.js          # Server entry point
└── supabase/             # Database migrations and configuration
```

## Features

- Product Management (CRUD operations)
- Sales Order Management
- Customer Management
- Search and Filtering
- Third-party API Integration
- Responsive Design

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Supabase Account

## Environment Variables

### Frontend (.env)
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Backend (server/.env)
```
PORT=3000
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_supabase_service_key
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your Supabase credentials

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Documentation

### Products API

#### GET /api/products
Get all products

Response:
```json
[
  {
    "id": "uuid",
    "name": "string",
    "description": "string",
    "price": "number",
    "stock": "number",
    "created_at": "date",
    "updated_at": "date"
  }
]
```

#### POST /api/products
Create a new product

Request Body:
```json
{
  "name": "string",
  "description": "string",
  "price": "number",
  "stock": "number"
}
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
    "id": "uuid",
    "customer_name": "string",
    "customer_email": "string",
    "customer_mobile": "string",
    "status": "string",
    "order_date": "date",
    "total_amount": "number",
    "products": [
      {
        "product_id": "uuid",
        "quantity": "number",
        "price": "number"
      }
    ]
  }
]
```

#### POST /api/sales-orders
Create a new sales order

Request Body:
```json
{
  "customer_name": "string",
  "customer_email": "string",
  "customer_mobile": "string",
  "products": [
    {
      "product_id": "uuid",
      "quantity": "number",
      "price": "number"
    }
  ]
}
```

## Development

### Frontend Development

The Angular application uses a component-based architecture with the following key features:

- Standalone components
- Lazy-loaded routes
- SCSS styling
- Reactive forms
- HTTP interceptors
- TypeScript strict mode

### Backend Development

The Express.js backend implements:

- RESTful API design
- Error handling middleware
- CORS support
- Environment configuration
- Supabase integration
- Third-party API integration

### Database Schema

The Supabase database includes the following tables:

- products
- sales_orders
- sales_order_items

Each table implements Row Level Security (RLS) policies for data protection.

## Testing

Run tests with:
```bash
npm run test
```

## Deployment

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Deploy the backend:
   ```bash
   npm run start
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License