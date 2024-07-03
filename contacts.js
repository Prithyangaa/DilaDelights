const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    let mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `Contact form submission from ${name}`,
      text: message
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent successfully');
  } catch (err) {
    res.status(500).send('Error sending message');
  }
});

module.exports = router;
