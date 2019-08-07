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
    html: '<h1>Hello World</h1><br><img src="http://zteam.herokuapp.com/assets/images/logo.png" />',
};

transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Message sent : ' + info.response);
    }
    transporter.close();
})