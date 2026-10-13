# Mariscos El Farito — Menú digital

Sitio estático (HTML + CSS + JS, sin frameworks ni build) con el menú y los precios
de **Mariscos El Farito**, pescadería en Mercedes Norte, Heredia, Costa Rica.
Se publica en Netlify y los clientes lo abren desde un código QR o un enlace de WhatsApp.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La página completa: diseño, estilos y el código que dibuja el menú |
| `precios.js` | **Única fuente de datos.** Secciones, productos, precios y la fecha de actualización |
| `menu-el-farito.csv` | La misma información en tabla, como respaldo y referencia |
| `netlify.toml` | Configuración de Netlify (publica la raíz y evita caché de `precios.js`) |
| `qr-menu.png` | Código QR que apunta al sitio publicado |

## Cómo cambiar un precio

1. Editá el precio en `precios.js` (número entero en colones, sin puntos ni símbolo).
2. Actualizá el mismo precio en `menu-el-farito.csv`.
3. Cambiá `ACTUALIZADO` en `precios.js` a la fecha del día (ej. `"13 de octubre de 2026"`).
4. `git commit` con un mensaje claro (ej. `Pulpo a ₡14.000`) y `git push`.
5. Netlify publica solo en menos de un minuto.

## Reglas

- Los precios **solo** se cambian en `precios.js`, nunca directamente en `index.html`.
- Sin frameworks, npm ni pasos de build: debe seguir funcionando abriendo `index.html` directamente.
- Identidad visual: fondo crema `#EDDFC2`, azul `#1B5A9A`, títulos en Leckerli One, texto en Libre Caslon. Modo oscuro automático.

## Negocio

- **Mariscos El Farito** — Mercedes Norte, Heredia. En frente de la Plaza de Deportes.
- Tel / WhatsApp: 8877-3189 (+506 8877 3189)
- Instagram / Facebook: @mariscoselfarito
