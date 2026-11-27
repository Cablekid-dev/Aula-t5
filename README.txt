AULA T5 · PREPARACIÓN AEAT
==========================

Contenido
---------
- Web responsive (móvil, tablet y ordenador).
- 12 temas organizados por bloques.
- Resumen por apartados, esquema de repaso, tarjetas de memoria y test autocorregible.
- Acceso a los 12 PDF originales incluidos en /pdfs.
- Guarda localmente el tema marcado como estudiado y la apariencia elegida.
- Puede instalarse como aplicación y dispone de caché offline tras la primera visita (requiere HTTPS).
- Buscador sobre títulos, resúmenes, esquemas y tarjetas.

PRUEBA LOCAL
------------
Abre index.html en un navegador moderno. Para evitar restricciones del visor PDF en algunos navegadores, es preferible ejecutar un servidor local:

  python -m http.server 8000

Después visita http://localhost:8000

PUBLICAR EN INTERNET (GRATIS)
-----------------------------
Opción sencilla: GitHub Pages
1. Crea una cuenta en https://github.com si no tienes una.
2. Crea un repositorio nuevo, por ejemplo aula-t5.
3. Sube TODO el contenido de esta carpeta (index.html, style.css, app.js, content.js y la carpeta pdfs).
4. En el repositorio entra en Settings → Pages.
5. En Build and deployment selecciona Deploy from a branch.
6. Selecciona la rama main y la carpeta /(root), guarda.
7. GitHub generará una dirección pública del tipo https://TU-USUARIO.github.io/aula-t5/.

También puedes publicar la carpeta en Netlify Drop: https://app.netlify.com/drop

IMPORTANTE SOBRE EL PROGRESO
----------------------------
El progreso se guarda en el almacenamiento local del navegador/dispositivo. Si abres la web desde otro móvil u ordenador, el progreso no se sincroniza automáticamente. La web no incluye cuentas ni servidor de usuarios.

NOTA SOBRE EL CONTENIDO
-----------------------
Los resúmenes y esquemas son materiales auxiliares de repaso elaborados a partir de los documentos facilitados. El PDF original de cada tema permanece disponible íntegro en la pestaña “Temario completo”. Para cifras, plazos, artículos y normativa vigente, contrasta siempre con el documento y las fuentes oficiales actualizadas.


ACTUALIZACION DE ESQUEMAS - NOVIEMBRE 2026
Se incorpora un sistema de estudio en tres niveles para los 12 temas: Nivel 1 (mapa general), Nivel 2 (esquema desarrollado desplegable) y Nivel 3 (claves de memorizacion y diferencias). Los esquemas se han elaborado tomando como base los indices y contenidos de los 12 PDF incluidos. Para datos normativos, cifras y procedimientos concretos, consulta siempre el documento original.


ACTUALIZACION DE CONTENIDO - NOVIEMBRE 2026
Se incorpora deep-content.js con resúmenes desarrollados y esquemas de tres niveles para los 12 temas. El apartado Resumen muestra desarrollo por epígrafes y claves de estudio. El apartado Esquema ofrece mapa general, esquema desplegable por apartados y claves de memorización. Se incrementa la caché a aula-t5-v4.
