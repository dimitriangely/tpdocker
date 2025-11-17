# 1) On choisit une image Node.js légère comme base -> Image Node 22 basée sur Alpine (légère et suffisante pour le TP)
FROM node:22-alpine                               

# 2) On définit le dossier de travail à l'intérieur du conteneur -> Toutes les commandes suivantes s'exécuteront dans /app
WORKDIR /app                                      

# 3) On copie les fichiers de dépendances de l'app React
#    ⚠️ Ton package.json est dans front/my-app/, donc on le copie depuis my-app/ -> Copie package.json (et package-lock.json s'il existe) dans /app
COPY my-app/package*.json ./                      

# 4) On installe les dépendances npm de l'app React -> Installe toutes les dépendances nécessaires au frontend
RUN npm install                                   

# 5) On copie ensuite tout le code source de l'app React  On prend tout le contenu de my-app/ et on le met dans /app -> Copie tout le projet React (my-app) dans /app
COPY my-app/. .                                  

# 6) On documente le port utilisé par le serveur de dev React -> Le serveur React écoute sur le port 3000
EXPOSE 3000      

# 7) Build de l'application en mode production (crée le dossier .next)
RUN npm run build

# 8) On définit la commande par défaut pour démarrer l'app -> Lance le script "start" défini dans package.json (Create React App typiquement)
CMD ["npm", "start"]                              
