import prisma from "./prisma";

// Fonction pour vérifier la connexion à la base de données
export async function checkDatabaseConnection() {
  try {
    console.warn("=== VÉRIFICATION DE LA CONNEXION À LA BASE DE DONNÉES ===");
    console.warn("Tentative de connexion à la base de données...");

    // Exécuter une requête simple pour vérifier la connexion
    const result = await prisma.$queryRaw`SELECT 1 as result`;

    console.warn("Connexion à la base de données réussie:", result);
    console.warn(
      "=== FIN VÉRIFICATION DE LA CONNEXION À LA BASE DE DONNÉES ===",
    );

    return true;
  } catch (error) {
    console.error("=== ERREUR DE CONNEXION À LA BASE DE DONNÉES ===");
    console.error("Erreur lors de la connexion à la base de données:", error);
    console.error("=== FIN ERREUR DE CONNEXION À LA BASE DE DONNÉES ===");

    return false;
  }
}

// Fonction pour vérifier la structure de la base de données
export async function checkDatabaseSchema() {
  try {
    console.warn("=== VÉRIFICATION DU SCHÉMA DE LA BASE DE DONNÉES ===");

    // Vérifier si la table User existe
    const tables = await prisma.$queryRaw`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
    `;

    console.warn("Tables dans la base de données:", tables);

    // Vérifier les colonnes de la table User
    const userColumns = await prisma.$queryRaw`
      SELECT column_name, data_type
      FROM information_schema.columns
      WHERE table_name = 'User'
    `;

    console.warn("Colonnes de la table User:", userColumns);
    console.warn("=== FIN VÉRIFICATION DU SCHÉMA DE LA BASE DE DONNÉES ===");

    return true;
  } catch (error) {
    console.error(
      "=== ERREUR DE VÉRIFICATION DU SCHÉMA DE LA BASE DE DONNÉES ===",
    );
    console.error(
      "Erreur lors de la vérification du schéma de la base de données:",
      error,
    );
    console.error(
      "=== FIN ERREUR DE VÉRIFICATION DU SCHÉMA DE LA BASE DE DONNÉES ===",
    );

    return false;
  }
}
