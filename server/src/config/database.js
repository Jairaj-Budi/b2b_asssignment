import knex from 'knex';
import { Model } from 'objection';
import knexConfig from './knexfile.js';

const environment = process.env.NODE_ENV || 'development';
const connectionConfig = knexConfig[environment];

// Initialize knex with error handling
const db = knex(connectionConfig);

// Test the connection
db.raw('SELECT 1')
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });

// Bind all Models to the knex instance
Model.knex(db);

export default db; 