import prisma from './prisma';

// Fonction pour vérifier la connexion à la base de données
export async function checkDatabaseConnection() {
  try {
    console.log('=== VÉRIFICATION DE LA CONNEXION À LA BASE DE DONNÉES ===');
    console.log('Tentative de connexion à la base de données...');
    
    // Exécuter une requête simple pour vérifier la connexion
    const result = await prisma.$queryRaw`SELECT 1 as result`;
    
    console.log('Connexion à la base de données réussie:', result);
    console.log('=== FIN VÉRIFICATION DE LA CONNEXION À LA BASE DE DONNÉES ===');
    
    return true;
  } catch (error) {
    console.log('=== ERREUR DE CONNEXION À LA BASE DE DONNÉES ===');
    console.error('Erreur lors de la connexion à la base de données:', error);
    console.log('=== FIN ERREUR DE CONNEXION À LA BASE DE DONNÉES ===');
    
    return false;
  }
}

// Fonction pour vérifier la structure de la base de données
export async function checkDatabaseSchema() {
  try {
    console.log('=== VÉRIFICATION DU SCHÉMA DE LA BASE DE DONNÉES ===');
    
    // Vérifier si la table User existe
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `;
    
    console.log('Tables dans la base de données:', tables);
    
    // Vérifier les colonnes de la table User
    const userColumns = await prisma.$queryRaw`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'User'
    `;
    
    console.log('Colonnes de la table User:', userColumns);
    console.log('=== FIN VÉRIFICATION DU SCHÉMA DE LA BASE DE DONNÉES ===');
    
    return true;
  } catch (error) {
    console.log('=== ERREUR DE VÉRIFICATION DU SCHÉMA DE LA BASE DE DONNÉES ===');
    console.error('Erreur lors de la vérification du schéma de la base de données:', error);
    console.log('=== FIN ERREUR DE VÉRIFICATION DU SCHÉMA DE LA BASE DE DONNÉES ===');
    
    return false;
  }
}
