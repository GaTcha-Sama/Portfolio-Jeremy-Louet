const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware pour analyser les données des formulaires
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurer le transporteur pour nodemailer
const transporter = nodemailer.createTransport({
  service: 'hotmail', 
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

// Route pour traiter les soumissions de formulaires
app.post('/send', (req, res) => {
  const mailOptions = {
    from: req.body.email,
    to: 'jeremy.louet29@hotmail.fr',
    subject: req.body.subject,
    text: `Nom: ${req.body.name}\nTéléphone: ${req.body.phone}\nMessage: ${req.body.message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message envoyé!');
  });
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
