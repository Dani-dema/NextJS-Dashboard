'use server';

import { sendMail } from '../../servies/sendEmail';
const emailHandler = async () => {
  try {
    await sendMail();
  } catch (err: any) {
    console.log(err, 'error');
  }
};

export default emailHandler;
