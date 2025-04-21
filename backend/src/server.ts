import express from 'express';
import cors from 'cors';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';
import config from './config';
import { checkDatabaseConnection, checkDatabaseSchema } from './utils/dbCheck';

// Initialiser l'application Express
const app = express();
const port = config.port;

// Middlewares
app.use(cors({
  origin: 'http://localhost:3000', // Autoriser les requêtes depuis le frontend
  credentials: true // Autoriser les cookies
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Middleware de gestion des erreurs
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  errorHandler(err, req, res, next);
});

// Vérifier la connexion à la base de données avant de démarrer le serveur
async function startServer() {
  try {
    // Vérifier la connexion à la base de données
    const isConnected = await checkDatabaseConnection();

    if (!isConnected) {
      console.error('Impossible de se connecter à la base de données. Arrêt du serveur.');
      process.exit(1);
    }

    // Vérifier le schéma de la base de données
    await checkDatabaseSchema();

    // Démarrer le serveur
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log(`API URL: http://localhost:${port}/api`);
    });
  } catch (error) {
    console.error('Erreur lors du démarrage du serveur:', error);
    process.exit(1);
  }
}

// Démarrer le serveur
startServer();
