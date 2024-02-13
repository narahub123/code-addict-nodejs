const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "noelia.fay75@ethereal.email",
      pass: "9HDGw7JBXtC76X4c1p",
    },
  });

  let info = await transporter.sendMail({
    from: '"Coding Addict "<noelia.fay75@ethereal.email>',
    to: "noelia.fay75@example.com",
    subject: "Hello",
    html: "<h2>Sending Emails with Node.js</h2>",
  });

  res.json(info);
};

module.exports = sendEmail;
