// Content Management System - Loader functions

// Cargar todo el contenido de home desde un único JSON
export async function getHomeContent() {
  try {
    const module = await import('../content/home.json');
    return module.default;
  } catch (error) {
    console.error('Error loading home content:', error);
    throw new Error('Failed to load home content');
  }
}

// Función para obtener sección específica del contenido
export async function getContentSection(section: string) {
  try {
    const homeContent = await getHomeContent();
    return homeContent[section] || null;
  } catch (error) {
    console.error(`Error loading ${section} content:`, error);
    throw new Error(`Failed to load content section: ${section}`);
  }
}

// Legacy: mantener compatibilidad con getValues
export async function getValues() {
  return await getContentSection('values');
}