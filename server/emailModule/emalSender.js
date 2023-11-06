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
    const recipients = data[data.length - 1];
    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: `${recipients.email}`,
      subject: "Custom Email Subject",
      text: 
      `${recipients.name},
      ${recipients.email},
      Admissions Committee,
      ${recipients.institute},
      ${recipients.study}
      Dear Admissions Committee,
      I am ${recipients.name} writing to express my strong interest in the ${recipients.study} at ${recipients.canadaInstitute}. With a deep passion and a strong educational foundation, I am excited to take my academic journey to the next level and make meaningful contributions to the field.
      Academic Background:
      I completed my ${recipients.educationLevel}  from ${recipients.study}, where I graduated with distinction.
      Professional Experience: 
      "${recipients.notes}"
      I am applying from ${recipients.whichCountry}, where my educational and professional journey has nurtured my passion.
      `,
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
