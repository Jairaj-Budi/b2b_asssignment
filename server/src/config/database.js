import { knex } from 'knex';
import { Model } from 'objection';
import knexConfig from './knexfile.js';

const environment = process.env.NODE_ENV || 'development';
const connectionConfig = knexConfig[environment];

// Initialize knex
const db = knex(connectionConfig);

// Bind all Models to the knex instance
Model.knex(db);

export default db; 