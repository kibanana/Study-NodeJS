const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '',
        pass: ''
    }
});

const mailOptions = {
    from: '',
    to: '',
    subject: 'Hello',
    text: 'I\'m good',
    attachments: [
        {
            filename: 'a.txt',
            path: 'a.txt',
        }
    ]
};

transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Message sent : ' + info.response);
    }
    transporter.close();
})