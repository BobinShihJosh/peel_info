import { Resend } from 'resend';
import ThankYouEmail from '@src/emails/ThankYouEmail'
import { Await } from 'react-router-dom'; 

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    await resend.sendEmail({
        from: 'hello@peel.solutions',
        to: 'bobinshihjosh@gmail.com',
        subject: 'Hello World',
        react: ThankYouEmail()
    });
 
}
 