// Prototipo simple: lista de productos y carrito en memoria
const PRODUCTS = [
  { id:1, title:'Camiseta Vibe', price:19.99, img:'assets/camiseta-vibe.svg', desc:'Camiseta cómoda de algodón con logo Vibe.' },
  { id:2, title:'Gorra Vibe', price:14.50, img:'assets/gorra-vibe.svg', desc:'Gorra ajustable con bordado.' },
  { id:3, title:'Taza Vibe', price:9.75, img:'assets/taza-vibe.svg', desc:'Taza cerámica para tu bebida favorita.' },
  { id:4, title:'Sudadera Vibe', price:39.00, img:'assets/sudadera-vibe.svg', desc:'Sudadera con capucha, suave y abrigadora.' }
];

const productsEl = document.getElementById('products');
const template = document.getElementById('product-template');
const cartCountEl = document.getElementById('cart-count');
let cart = [];

function renderProducts(){
  productsEl.innerHTML = '';
  PRODUCTS.forEach(p=>{
    const frag = template.content.cloneNode(true);
    frag.querySelector('.product-title').textContent = p.title;
    frag.querySelector('.product-price').textContent = `$${p.price.toFixed(2)}`;
  const img = frag.querySelector('.product-image');
  img.src = p.img || 'assets/placeholder.svg';
  img.alt = p.title;
  const btn = frag.querySelector('.add-btn');
  btn.addEventListener('click', ()=> addToCart(p));
  // ir a detalles
  const title = frag.querySelector('.product-title');
  const wrap = document.createElement('a');
  wrap.href = `product-details.html?id=${p.id}`;
  wrap.className = 'product-link';
  title.parentNode.insertBefore(wrap, title);
  wrap.appendChild(title);
    productsEl.appendChild(frag);
  })
}

function addToCart(product){
  // evitar mutar el objeto original
  const copy = Object.assign({}, product);
  copy.qty = (copy.qty || 1);
  cart.push(copy);
  updateCartUI();
}

function updateCartUI(){
  cartCountEl.textContent = cart.length;
  // exponer carrito globalmente para otras páginas
  window._vibe_cart = cart;
  try{ localStorage.setItem('vibe_cart', JSON.stringify(cart)); }catch(e){}
}

// Inicialización
(function(){
  // exponer PRODUCTS globalmente
  window.PRODUCTS = PRODUCTS;
  // intentar recuperar carrito
  try{ const saved = localStorage.getItem('vibe_cart'); if(saved){ cart = JSON.parse(saved); } }catch(e){}
  renderProducts();
  updateCartUI();
})();