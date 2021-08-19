const nodemailer = require('nodemailer');

const sendEmail = (correo, subject, message) => {

    return new Promise((resolve, reject) => {
        // const transporter = nodemailer.createTransport({
        //     host: "correo.miteleferico.bo",
        //     port: 465,
        //     secure: true,
        //     auth: {
        //       user: "sistemas@miteleferico.bo",
        //       pass: "76KhCgc5"
        //     },
        //     tls: {
        //       rejectUnauthorized: false
        //     }
        // });

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: "mtvitual2021@gmail.com",
              pass: "Sistemas0."
            },
            tls: {
                rejectUnauthorized: false
            }
        });


        const mailOptions = {
            from: "formulario.miteleferico.bo",
            to: correo,
            subject: subject,
            html: message,
        };
        
        transporter.sendMail(mailOptions, function(err, info){
            
            if ( err ) {
                reject(err)
            }
            
            resolve('Message sent: ' + info.response)
        });       
    })
}

module.exports = {
    sendEmail
}



