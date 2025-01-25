const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email setup (using Gmail SMTP in this example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '21i03.alriya@sjec.ac.in', // replace with your email
    pass: 'ahydnksks367',   // replace with your email password or app password
  },
});

// Handle form submissions
app.post('/contact', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Define email options
  const mailOptions = {
    from: email,
    to: 'your-email@example.com', // replace with your email
    subject: `New Message from ${firstName} ${lastName}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ code: 500, message: 'Failed to send email', error });
    }
    res.status(200).json({ code: 200, message: 'Message sent successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
