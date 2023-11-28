require('dotenv').config();
const nodemailer = require('nodemailer');
exports.send = (req, res) => {
    const { email, textSendMail, sechedule } = req.body;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'chjkien9x@gmail.com', // generated ethereal user
            pass: 'zumwehmtzismwuyb', // generated ethereal password
        },
    });

    // send mail with defined transport object
    transporter.sendMail(
        {
            from: 'chjkien9x@gmail.com', // sender address
            to: email, // list of receivers
            subject: 'Web Việc làm', // Subject line
            text: textSendMail, // plain text body
            html: `<b>${textSendMail}</b><br/><b>Lịch phỏng vấn của bạn vào ngày: ${sechedule}</b>`, // html body
        },
        (err) => {
            if (err) {
                return res.json({
                    message: 'Lỗi',
                    err,
                });
            }
            return res.json({
                message: 'Đã gửi',
            });
        },
    );
};
