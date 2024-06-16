import { env } from 'process';

var nodemailer = require('nodemailer');
//-----------------------------------------------------------------------------
export async function sendMail() {
  var transporter = nodemailer.createTransport({
    service: env.EMAIL_SERVICE,
    host: env.EMAIL_SERVER_HOST,
    port: env.EMAIL_SERVER_PORT,
    secure: true,
    auth: {
      user: env.EMAIL_FROM,
      pass: env.EMAIL_SERVER_PASSWORD,
    },
  });

  var mailOptions = {
    from: env.EMAIL_FROM,
    to: env.EMAIL_TO,
    subject: 'Test',
    text: 'Ky eshte nje email test i derguar nga Dani mqs mesoj si te nisi email nga app. Puc Dani',
  };

  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log(error, 'errore');
      throw new Error(error);
    } else {
      console.log('Email Sent');
      return true;
    }
  });
}
