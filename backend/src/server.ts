import express from "express";
import cors from "cors";
import session from "express-session";
import routes from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import config from "./config";
import { checkDatabaseConnection, checkDatabaseSchema } from "./utils/dbCheck";
import passport from "./config/passport";

// Initialiser l'application Express
const app = express();
const port = config.port;

// Middlewares
app.use(
  cors({
    origin: config.frontendUrl, // Autoriser les requêtes depuis le frontend
    credentials: true, // Autoriser les cookies
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuration de la session
app.use(
  session({
    secret: config.jwtSecret,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === "production" },
  }),
);

// Initialisation de Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api", routes);

// Route directe pour l'authentification Google (si nécessaire pour correspondre à l'URL configurée dans Google Cloud)
// Commentez ou décommentez cette ligne selon vos besoins
// app.use('/', routes);

// Middleware de gestion des erreurs
app.use((_req, res, next) => {
  try {
    next();
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errorHandler(err as any, res);
  }
});

// Vérifier la connexion à la base de données avant de démarrer le serveur
async function startServer() {
  try {
    // Vérifier la connexion à la base de données
    const isConnected = await checkDatabaseConnection();

    if (!isConnected) {
      console.error(
        "Impossible de se connecter à la base de données. Arrêt du serveur.",
      );
      process.exit(1);
    }

    // Vérifier le schéma de la base de données
    await checkDatabaseSchema();

    // Démarrer le serveur
    app.listen(port, () => {
      console.warn(`Serveur démarré sur le port ${port}`);
    });
  } catch (error) {
    console.error("Erreur lors du démarrage du serveur:", error);
    process.exit(1);
  }
}

// Démarrer le serveur
startServer();
