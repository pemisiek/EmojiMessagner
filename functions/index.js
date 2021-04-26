const functions = require("firebase-functions");
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
admin.initializeApp()

let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "apikey",
      pass: "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"
    }
  });
  

exports.sendEmail = functions.https.onRequest((req, res) => {
    const email_from = req.query.email_from
    const message = req.query.message
    const number = req.query.number
    const name = req.query.name

    const mailOptions = {
        from: 'MPcoding | korepetycje <michal.pawel.plocienniczak@gmail.com>',
        to: 'korepetycje@mpcoding.pl',
        subject: `Korepetycje ${name} | Kontakt form MP coding`,
        html: `<h2>From ${email_from} | ${name} </h2> <h3>numer tel.: ${number} <p>${message}</p>`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(`ERROR: (email) ${email_from} --- (message) ${message} --- (name) ${name} --- (number) ${number} --- error ${error.toString()}`)
            res.send(error.toString())
        }
        res.send('Your message was submitted successfully!')
    })

})