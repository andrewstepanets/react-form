const nodemailer = require('nodemailer');

function generateEmail({ firstName, lastName, email, phoneNumber = '1' }) {
  return `
        <div>
            <h2>Filled Form</h2>
            <p>
                <span>${firstName}</span><br>
                <span>${lastName}</span><br>
                <span>${email}</span><br>
                <span>${phoneNumber}</span>
            </p>
        </div>
    `;
}

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
  const body = JSON.parse(event.body);
  // Test send an e-mail
  const info = await transporter.sendMail({
    from: 'My form <form@example.com>',
    to: 'admin@example.com',
    subject: 'New form filled',
    html: generateEmail(body),
  });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  };
};
