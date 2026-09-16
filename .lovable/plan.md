# Trayectoria TER y actualización de proyectos

## Alcance
- Sustituir el bloque actual de confianza por una sección editorial clara, sin fotografía, ubicada antes del formulario.
- Retirar TEO 618 de todos los datos visibles y actualizar la oferta actual a cinco proyectos.
- Conservar sin cambios el resto del Home, sus interacciones y estructura.

## Implementación
1. **Trayectoria y respaldo**
   - Crear el título y texto proporcionados sobre fondo marfil cálido.
   - Presentar los cuatro indicadores con números amplios, acentos verde TER y mostaza, y una composición responsive.
   - Añadir una franja inferior con “Miembros de” y espacios sobrios identificados para CODIP y CAPECO, sin recrear logotipos no disponibles.
   - Añadir un bloque de “Certificación” dedicado únicamente a EDGE Advanced y su nota informativa por proyecto.

2. **Oferta activa**
   - Eliminar el registro, importación e imagen asociada de TEO 618.
   - Retirar Santa Beatriz del selector de distritos al quedar sin proyectos activos.
   - Cambiar el texto del listado a “cinco proyectos disponibles”.
   - Mantener “+6 proyectos desarrollados” solo en la nueva sección como dato histórico.
   - Actualizar la descripción SEO para que enumere únicamente los distritos con oferta activa y usar las URL públicas correctas.

3. **Validación**
   - Comprobar que no queden referencias a TEO 618 ni textos obsoletos.
   - Verificar el Home en escritorio y móvil, incluyendo el filtrado y la carga correcta del nuevo bloque.
   - Confirmar que el proyecto compile sin errores, sin publicar ni desplegar.

## Archivos previstos
- `src/components/ter/Trust.tsx`
- `src/components/ter/Projects.tsx`
- `src/data/projects.ts`
- `src/routes/index.tsx`
- Eliminación de `src/assets/proj-teo.jpg`
