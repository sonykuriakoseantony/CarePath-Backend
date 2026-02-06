const nodemailer = require("nodemailer");

const host = process.env.MAIL_HOST || "smtp.gmail.com";
const port = process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT, 10) : 465;
const secure = typeof process.env.MAIL_SECURE !== "undefined"
  ? process.env.MAIL_SECURE == "true"
  : port == 465;
const user = process.env.MAIL_USER;
const pass = process.env.MAIL_PASS;

const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: user && pass ? { user, pass } : undefined,
  tls: {
    rejectUnauthorized: process.env.MAIL_REJECT_UNAUTHORIZED == "true",
  },
  connectionTimeout: process.env.MAIL_CONNECTION_TIMEOUT ? parseInt(process.env.MAIL_CONNECTION_TIMEOUT, 10) : 10000,
});

// transporter.verify((err, success) => {
//   if (err) {
//     console.error("Mailer connection failed:", err);
//   } else {
//     console.info("Mailer is ready to send messages");
//   }
// });

module.exports = transporter;