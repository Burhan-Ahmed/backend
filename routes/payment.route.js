const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Use the environment variable

const router = express.Router();
router.use(express.json());
router.use(cors());

router.post('/', async (req, res) => {
    console.log('Stripe Secret Key:', process.env.stripe); // Log the key for debugging

    try {
        const { paymentMethodId } = req.body;
        console.log('paymentMethodId:', paymentMethodId);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1000,  // Amount in cents
            currency: 'usd',
            payment_method: paymentMethodId,
            confirmation_method: 'manual',
            confirm: true,
            return_url: 'https://stay-ease-front-end.vercel.app/',
        });
        console.log('paymentIntent:', paymentIntent);

        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error('Error:', error); // Log the error for debugging
        res.status(500).json({ error: error.message });
    }
});

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from Payment Page' });
});

module.exports = router;
