const axios = require('axios');

const PAYPAL_BASE = process.env.PAYPAL_MODE === 'live'
  ? 'https://api-m.paypal.com'
  : 'https://api-m.sandbox.paypal.com';

async function getAccessToken() {
  const { data } = await axios({
    url: `${PAYPAL_BASE}/v1/oauth2/token`,
    method: 'post',
    auth: {
      username: process.env.PAYPAL_CLIENT_ID,
      password: process.env.PAYPAL_CLIENT_SECRET,
    },
    params: { grant_type: 'client_credentials' },
  });
  return data.access_token;
}

async function createOrder({ amount, currency = 'USD' }) {
  const accessToken = await getAccessToken();
  const { data } = await axios.post(
    `${PAYPAL_BASE}/v2/checkout/orders`,
    {
      intent: 'CAPTURE',
      purchase_units: [{ amount: { currency_code: currency, value: amount } }],
    },
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  return data;
}

async function captureOrder(orderId) {
  const accessToken = await getAccessToken();
  const { data } = await axios.post(
    `${PAYPAL_BASE}/v2/checkout/orders/${orderId}/capture`,
    {},
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  return data;
}

module.exports = { createOrder, captureOrder };
