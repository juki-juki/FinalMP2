const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { email } = req.body;

  const data = {
    personalizations: [
      {
        to: [{ email: email }],
        subject: 'Subscription Confirmation'
      }
    ],
    from: {
      email: 'alvinjoshuac@gmail.com'
    },
    content: [
      {
        type: 'text/plain',
        value: 'Thank you for subscribing!'
      }
    ]
  };

  const headers = {
    'Authorization': 'Bearer 45f2afe8c7msh63f47fc86b451d8p199ad3jsnd42a57cbd4d3'
  };

  try {
    const response = await axios.post('https://api.sendgrid.com/v3/mail/send', data, {
      headers: headers
    });

    res.json({ success: true, data: response.data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
