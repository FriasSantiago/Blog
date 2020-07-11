const nodemailer = require('nodemailer');
const mailAuth   = require('.././keys').emails;

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: mailAuth.email,
        pass: mailAuth.pwd
    }
});

module.exports.sendWelcomeEmail = user => {
    const emailConfig = {
        from: mailAuth.email,
        to: user.email,
        subject: 'Welcome!',
        text: `Dear ${user.uid}:\nWelcome to MyBlogApp!\n\nWe hope you get the best out of our app!\nThank you very much for choosing us,\n\nThe MyBlogApp team.`
    };

    transporter.sendMail(emailConfig);
}