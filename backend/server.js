require('dotenv').config(); // Charger les variables d'environnement
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route pour traiter le formulaire
app.post('/send', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Configurer le transporteur d'e-mail
  let transporter = nodemailer.createTransport({
    service: 'hotmail', // Utilisez 'hotmail' pour Outlook/Hotmail
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Options de l'e-mail
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'jeremy.louet29@hotmail.fr',
    subject: `Nouveau message de ${name}: ${subject}`,
    text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\n\nMessage:\n${message}`
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Une erreur est survenue');
    } else {
      console.log('Email envoyé: ' + info.response);
      res.status(200).send('Message envoyé avec succès');
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});