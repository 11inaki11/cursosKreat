# Kreat FX · Escuela de Artes y Oficios Audiovisuales

Web de presentación de los cursos de la escuela de Kreat FX (próximamente en 2027) con formulario de inscripción. Es una web estática: HTML, CSS y JavaScript, sin compilación ni dependencias. Se sube tal cual a cualquier hosting.

## Estructura

```
index.html        Página completa (textos en español)
styles.css        Estilos
main.js           Traducciones al inglés, formulario, menú, carrusel y reels
assets/img/       Fotos, pósters y logos (Kreat FX y Feroca)
assets/video/     Vídeo de cabecera y los 5 showreels
```

## Verla en local

Desde esta carpeta:

```bash
python3 -m http.server 8765
```

y abrir http://localhost:8765.

## Publicarla

Cualquiera de estas opciones sirve; no hay que configurar nada más.

**GitHub Pages** (gratis, desde este mismo repositorio)
1. *Settings → Pages*.
2. *Source*: **Deploy from a branch**. *Branch*: **main**, carpeta **/ (root)**. *Save*.
3. En un par de minutos estará en `https://11inaki11.github.io/cursosKreat/`.
4. Para usar un dominio propio (p. ej. `kreatfx.com`), en la misma pantalla, *Custom domain*, y seguir las instrucciones de DNS que da GitHub.

**Netlify / Vercel**: importar el repositorio. Sin comando de build y con la carpeta raíz como directorio de publicación.

## Formulario de inscripción

El formulario envía los datos a una hoja de Google Sheets gestionada por Iñaki (a través de un script de Google). La dirección del script está al principio de `main.js`, en `SHEET_ENDPOINT`. **No hay que tocarla**: funciona desde cualquier dominio.

La primera inscripción tras un rato sin uso puede tardar unos segundos en confirmarse; es normal.

## Editar textos

- **Español:** directamente en `index.html`.
- **Inglés:** en `main.js`, dentro de `I18N.en`. Cada texto del HTML lleva un `data-i18n="clave"` que corresponde a una clave de esa lista.
- El idioma por defecto es español; el selector ES / EN está arriba a la derecha.

## Contacto

info@kreatfx.com
