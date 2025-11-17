# On prend l'image officielle Nginx comme base -> Image Nginx légère basée sur Alpine
FROM nginx:alpine                               

# On supprime la configuration par défaut de Nginx -> On enlève le site par défaut pour éviter les conflits
RUN rm /etc/nginx/conf.d/default.conf           

# On copie notre configuration personnalisée dans le dossier de config Nginx -> On place notre fichier nginx.conf dans conf.d
COPY nginx.conf /etc/nginx/conf.d/app.conf      

# (Optionnel) On rappelle que Nginx écoute sur le port 80 -> Le reverse proxy écoutera sur le port 80
EXPOSE 80                                       
