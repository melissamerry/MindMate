const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || '');
const Package = require('../models/Package');

// Create a Checkout session
router.post('/create-checkout-session', async (req, res) => {
  try {
    const { packageId, successUrl, cancelUrl } = req.body;
    const pkg = await Package.findById(packageId);
    if (!pkg) return res.status(404).json({ msg: 'Package not found' });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price_data: {
        currency: 'usd',
        product_data: { name: pkg.title },
        unit_amount: pkg.priceCents
      }, quantity: 1 }],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl
    });

    res.json({ url: session.url, id: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Payment error' });
  }
});

// Webhook endpoint stub
router.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  // IMPORTANT: verify signature in production using stripe.webhooks.constructEvent
  console.log('Stripe webhook received');
  res.json({ received: true });
});

module.exports = router;
