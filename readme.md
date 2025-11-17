 TP Docker Compose – Application Web Multi-Services
📌 Contexte du TP

Ce TP consiste à déployer une application web complète composée de plusieurs services isolés et orchestrés via Docker Compose.

Architecture :

Frontend : Application Next.js (conteneur : frontend)

Backend : API Node.js / Express (conteneur : backend)

Base de données : PostgreSQL (conteneur : db)

Reverse Proxy : Nginx pour router les requêtes (conteneur : nginx)

1) Objectifs du TP

✔ Conteneuriser chaque partie de l’application
✔ Construire les images avec des Dockerfile propres
✔ Mettre en place un reverse proxy fonctionnel
✔ Interconnecter les services via Docker Compose
✔ Exposer un frontend et plusieurs routes API via Nginx

2) Arborescence du projet
tp_docker/
├── docker-compose.yml
├── front/
│   ├── Dockerfile
│   └── my-app/                # Projet Next.js
├── back/
│   ├── Dockerfile
│   └── index.js               # API Express
└── nginx/
    ├── Dockerfile
    └── nginx.conf             # Reverse proxy

3) Contenu des services
 3.1 Frontend (Next.js)

L’application Next.js est buildée puis servie via :

npm run build
npm start


Elle écoute sur :

localhost:3000


Nginx redirige / vers elle.

🔷 3.2 Backend (Node.js / Express)

API simple avec deux endpoints :

/api1  → Hello from Backend1!
/api2  → Hello from Backend2!


Le backend écoute sur :

localhost:3000  (dans le conteneur)


Nginx proxy :

/api1 → backend/api1

/api2 → backend/api2

 3.3 Base de données (PostgreSQL)

PostgreSQL tourne en conteneur avec un volume persistant :

Volume : db-data
Image  : postgres:16-alpine

 3.4 Reverse Proxy (Nginx)

Nginx écoute en façade sur :

localhost:80


Et distribue :

Route	Cible
/	Frontend (frontend:3000)
/api1	Backend (backend:3000/api1)
/api2	Backend (backend:3000/api2)

Commandes essentielles

 Construction + démarrage

Depuis le dossier tp_docker/ :

docker-compose up --build

 Arrêter et supprimer les conteneurs
docker-compose down

 Voir les logs en temps réel
docker-compose logs -f

5 Tests de fonctionnement

 Frontend via Nginx

 http://localhost

 API 1 via Nginx

 http://localhost/api1

Résultat attendu :

{ "message": "Hello from Backend1!" }

 API 2 via Nginx

 http://localhost/api2

Résultat attendu :

{ "message": "Hello from Backend2!" }

(Optionnel) Tester directement les conteneurs

Frontend (mode debug) :
 http://localhost:3000

Backend direct :
 http://localhost:4000/api1

6) Explication du fonctionnement global

Docker Compose crée un réseau interne dans lequel :

frontend peut appeler backend via backend:3000

nginx peut router les requêtes vers les conteneurs grâce à leurs noms de services

db n'est jamais exposée directement à l’extérieur (sécurité)

Chaque service est isolé dans son conteneur :

Node → indépendance des dépendances backend / frontend

PostgreSQL → persistance des données

Nginx → front-end réseau unique

7) Points de validation du TP

✔ Le build des images se déroule sans erreur
✔ Tous les conteneurs se lancent correctement
✔ Accès au frontend via http://localhost
✔ Requêtes API via Nginx /api1 et /api2
✔ Routing Nginx entièrement fonctionnel
✔ Code propre + structure correcte des Dockerfile
✔ Utilisation d’un volume pour PostgreSQL

8) Conclusion

Ce TP met en pratique les fondamentaux du déploiement d’applications modernes :

Conteneurisation

Micro-services

Reverse proxy

Orchestration avec Docker Compose

Isolation frontend / backend / base de données

Build multi-étapes (Next.js)

Nous avons maintenant une architecture proche d’une vraie stack de production, prête à évoluer.

Pour lancer le projet, se placer dans dossier ou se situe le fichier docker-compose.yml et faire : docker-compose up --build