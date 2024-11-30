// src/types/interfaces.ts

// Interfaz para los proyectos
export interface Proyecto {
    title: string;         // Título del proyecto
    description: string;   // Breve descripción
    link: string;          // URL del repositorio o demo
  }
  
  // Interfaz para las habilidades
  export interface Habilidad {
    logo: string;          // URL del logo de la tecnología
    name: string;          // Nombre de la habilidad
    description: string;   // Cómo la has usado
    level: number;         // Nivel de habilidad (1 a 5)
  }
  