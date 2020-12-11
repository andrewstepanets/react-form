const nodemailer = require('nodemailer');

// create a transport for nodemailer

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  // Test send an e-mail
  const info = await transporter.sendMail({
    from: 'My form <form@example.com>',
    to: 'admin@example.com',
    subject: 'New form filled',
    html: `<p>The new form was filled!</p>`,
  });
  console.log(info);
  return {
    statusCode: 200,
    body: JSON.stringify(info),
  };
};
