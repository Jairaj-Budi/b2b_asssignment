const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Get all sales orders with filtering
router.get('/', async (req, res) => {
  try {
    let query = supabase
      .from('sales_orders')
      .select(`
        *,
        sales_order_items (
          product_id,
          quantity,
          price
        )
      `)
      .order('created_at', { ascending: false });

    // Apply filters if provided
    if (req.query.customerName) {
      query = query.ilike('customer_name', `%${req.query.customerName}%`);
    }
    if (req.query.customerEmail) {
      query = query.ilike('customer_email', `%${req.query.customerEmail}%`);
    }
    if (req.query.customerMobile) {
      query = query.ilike('customer_mobile', `%${req.query.customerMobile}%`);
    }
    if (req.query.status) {
      query = query.eq('status', req.query.status);
    }
    if (req.query.orderDate) {
      query = query.gte('order_date', req.query.orderDate);
    }

    const { data, error } = await query;
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create sales order
router.post('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('sales_orders')
      .insert([req.body])
      .select()
      .single();

    if (error) throw error;

    // Send order to third-party API
    try {
      await fetch('https://third-party-api.com/salesOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
        },
        body: JSON.stringify(data)
      });
    } catch (apiError) {
      console.error('Failed to send order to third-party API:', apiError);
    }

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;