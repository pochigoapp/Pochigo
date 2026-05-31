# PochiGO — Landing Web

Landing page oficial de **PochiGO Mototaxi**, construida con Astro + Tailwind CSS.

## Cómo correr

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Estructura

```
src/
├── components/   ← Secciones de la landing (Header, Hero, etc.)
├── layouts/      ← HTML base + meta tags + fuentes
├── pages/        ← index.astro
└── styles/       ← global.css
public/
└── images/       ← Logos, mockups, screenshots
```

## Imágenes requeridas

Guarda manualmente en `public/images/`:

| Archivo | Descripción |
|---|---|
| `logo-icon.png` | Casco morado en pin (icono cuadrado) |
| `logo-wordmark.png` | "PochiGO MOTOTAXI" texto |
| `logo-icon.svg` *(opcional)* | Versión vectorial del icono |

## Paleta

Colores definidos en `tailwind.config.mjs`:

- `pochi-600` `#7C3AED` — primario
- `pochi-50` `#F5F3FF` — lavanda fondo
- `ink-900` `#0A0A0A` — negro logo
- `ink-500` `#6B7280` — texto secundario

## Deploy

Build estático listo para Vercel / Netlify:

```bash
npm run build       # genera dist/
npm run preview     # prueba el build local
```

Cualquier hosting que sirva archivos estáticos funciona.
