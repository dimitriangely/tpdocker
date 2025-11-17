# Image de base Node.js (tu peux garder 22-alpine si tu veux)
FROM node:22-alpine

# Dossier de travail
WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste du code
COPY . .

# Port sur lequel ton API écoute en interne
EXPOSE 3000

# 🟢 Commande de démarrage : on lance directement le fichier principal
# ⚠️ Adapte "index.js" au nom de ton fichier (server.js, app.js...)
CMD ["node", "index.js"]
