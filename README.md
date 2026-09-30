# Nuestra historia 💌

App web romántica para Yanira: historia, razones, cartas "Ábrelo cuando…", versículos y fotos.

## Estructura
- `index.html` – estructura
- `styles.css` – diseño
- `app.js` – funcionamiento (no hace falta tocarlo)
- `data.js` – **todo el contenido**: textos, razones, cartas, versículos y lista de fotos
- `fotos/` – las fotos (foto-01.jpg … foto-36.jpg)

## Editar
- Cambiar un texto → `data.js`
- Agregar una foto → súbela a `fotos/` como `foto-37.jpg` y cambia `length: 36` por `length: 37` en `data.js`
- Cambiar las fotos de la portada → lista `portada` en `data.js`

## Publicar
1. Crea un repositorio en GitHub (puede ser privado) y sube todo el contenido de esta carpeta.
2. En vercel.com → Add New → Project → importa el repo.
3. Framework preset: **Other**. Sin build command. Deploy.
4. Cada vez que hagas push a GitHub, Vercel actualiza la app solo.
