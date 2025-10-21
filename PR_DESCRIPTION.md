# feat: prototipo VibeMarket — tienda con carrito y checkout simulado

## Resumen
Agrega un prototipo de tienda (VibeMarket) con páginas de productos, detalle y checkout simulado. Incluye carrito persistente en localStorage, assets SVG para productos, y un ejemplo de servidor para integrar pagos (esqueleto).

## Cambios clave
- Frontend: `ShoppingApp/index.html`, `product-details.html`, `checkout.html`, `styles.css`, `app.js`.
- Assets: logos y SVGs de productos (`ShoppingApp/assets/*`).
- Server example: `server/` (esqueleto para PaymentIntent con Stripe, `.env.example`).

## Notas de implementación
- El carrito se guarda en localStorage (`vibe_cart`) y las órdenes simuladas se guardan en `vibe_orders`.
- El checkout intenta llamar a `POST /create-payment-intent` en `http://localhost:4242` si existe un backend; si no, crea una orden local simulada.
- Recomendación: revisar y añadir claves de Stripe en `server/.env` antes de usar pagos reales.

## Cómo probar localmente
1. Servir la carpeta `ShoppingApp/`:

```powershell
cd C:\Users\USER\Desktop\VibeCoding-PrototypeApp\ShoppingApp
python -m http.server 8000
```

2. Abrir http://localhost:8000 en el navegador.
3. Añadir productos al carrito, ir a Checkout y completar (simulado).

## Checklist
- [ ] Revisar assets/imagenes reales (opcional).
- [ ] Probar servidor ejemplo si se integra Stripe.
- [ ] Merge a `main` tras revisión.
