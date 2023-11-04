const nodemailer = require("nodemailer");
const FormEntry = require("../schema/mongSchema");
const dotenv = require("dotenv");
dotenv.config();
// nodemailer transporr.....
//ocor dyuw gboe dnki
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

// function to send an email....

async function sendEmail() {
  try {
    const data = await FormEntry.find({});
    console.log("yess");
    const recipients = data.map(entry => entry.email);
    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: recipients.join(','),
      subject: "Custom Email Subject",
      text: `Hello, here's your data from MongoDB: ${JSON.stringify(data)}`,
      html: `<p>Hello, here's your data from MongoDB: <pre>${JSON.stringify(
        data,
        null,
        2
      )}</pre></p>`,
    };
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  } catch (error) {
    console.error("Error while fetching data:", error);
  }
}

module.exports = { sendEmail };
