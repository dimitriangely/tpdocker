const express = require('express');               // On importe le framework Express
const app = express();                            // On crée une instance de l'application Express

// Première API : /api1 -> "Backend1"
app.get('/api1', (req, res) => {                  // Quand on reçoit une requête GET sur /api1
  res.json({ message: 'Hello from Backend1!' });  // On renvoie une réponse JSON
});

// Deuxième API : /api2 -> "Backend2"
app.get('/api2', (req, res) => {                  // Quand on reçoit une requête GET sur /api2
  res.json({ message: 'Hello from Backend2!' });  // On renvoie une autre réponse JSON
});

// L'application écoute sur le port 3000
app.listen(3000, () => {                          // On démarre le serveur sur le port 3000
  console.log('API running on port 3000');        // On affiche un message dans la console
});
