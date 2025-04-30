import { PrismaClient } from "@prisma/client";

// Créer une instance PrismaClient globale pour éviter trop de connexions en développement
const prisma = new PrismaClient();

export default prisma;
