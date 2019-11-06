const nodeMailer = require('nodemailer');
// smtp 서버를 사용하기 위한 모듈이다.
const smtpPool = require('nodemailer-smtp-pool');

// nodemailer 의 createTransport는 transporter 객체를 만드는 메소드인데
// nodemailer-smtp-pool 객체 인스턴스가 이 메소드의 인자로 쓴다.
const smtpTransport = nodeMailer.createTransport(smtpPool({
  service: 'Gmail',
  host: 'localhost',
  port: '8888',
  tls: {
    rejectUnauthorize: false,
  },

  // 이메일 전송을 위해 필요한 인증정보
  // gmail 계정과 암호
  auth: {
    user: '',
    pass: '',
  },
  maxConnections: 5,
  maxMessages: 10,
}));

const mailOpt = {
  from: '',
  to: '',
  subject: 'Hello! It\'s nodemailer',
  text: 'I\'m succeed',
};
smtpTransport.sendMail(mailOpt, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Message sent : ${res}`);
  }

  smtpTransport.close();
});
