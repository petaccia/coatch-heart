// Utilitaires pour les requêtes API

// Configuration de base de l'API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// Pour le débogage
console.log('API_BASE_URL:', API_BASE_URL);

// Fonction utilitaire pour les requêtes API
export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  // Récupérer le token d'authentification s'il existe
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  // Configuration par défaut des headers
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  // Fusionner les options
  const config = {
    ...options,
    headers,
  };

  console.log(`Requête API vers ${url}:`, {
    method: options.method || 'GET',
    headers,
    body: options.body ? JSON.parse(options.body as string) : undefined
  });

  try {
    const response = await fetch(url, config);

    // Vérifier si la réponse est OK
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erreur API:', errorData);
      throw new Error(errorData.message || 'Une erreur est survenue');
    }

    // Retourner les données
    const data = await response.json();
    console.log(`Réponse API de ${url}:`, data);
    return data;
  } catch (error) {
    console.error(`Erreur lors de l'appel à ${url}:`, error);
    throw error;
  }
}