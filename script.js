const productsContainer = document.getElementById("products");
const categoriesContainer = document.getElementById("categories");
const cartCount = document.getElementById("cart-count");
const loader = document.getElementById("loader");
const modalDetails = document.getElementById("modal-details");
const cartSidebar = document.getElementById("cart-sidebar");
const cartItems = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartUI();

function showLoader(){ loader.classList.remove("hidden"); }
function hideLoader(){ loader.classList.add("hidden"); }

async function loadProducts(){
  showLoader();
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  displayProducts(data);
  hideLoader();
}

function displayProducts(products){
  productsContainer.innerHTML="";
  products.forEach(p=>{
    productsContainer.innerHTML += `
    <div class="card bg-white shadow-lg p-4">
      <figure><img src="${p.image}" class="h-40 object-contain"/></figure>
      <div class="card-body">
        <h2 class="card-title text-sm">${p.title.slice(0,40)}...</h2>
        <p class="text-primary font-bold">$${p.price}</p>
        <p>⭐ ${p.rating.rate}</p>
        <div class="card-actions justify-between">
          <button onclick="showDetails(${p.id})" class="btn btn-sm">Details</button>
          <button onclick="addToCart(${p.id})" class="btn btn-primary btn-sm">Add</button>
        </div>
      </div>
    </div>
    `;
  });
}

async function loadCategories(){
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();

  data.forEach(cat=>{
    const btn = document.createElement("button");
    btn.className="btn btn-outline";
    btn.innerText=cat;
    btn.onclick=()=>loadByCategory(cat);
    categoriesContainer.appendChild(btn);
  });
}

async function loadByCategory(cat){
  showLoader();
  const res = await fetch(`https://fakestoreapi.com/products/category/${cat}`);
  const data = await res.json();
  displayProducts(data);
  hideLoader();
}

async function showDetails(id){
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const p = await res.json();

  modalDetails.innerHTML=`
  <h3 class="font-bold text-lg">${p.title}</h3>
  <img src="${p.image}" class="h-40 mx-auto my-4"/>
  <p>${p.description}</p>
  <p class="mt-2 font-bold">$${p.price}</p>
  <button onclick="addToCart(${p.id})" class="btn btn-primary mt-3">Add to Cart</button>
  `;

  document.getElementById("productModal").showModal();
}

async function addToCart(id){
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI(){
  cartItems.innerHTML="";
  let total=0;

  cart.forEach((item,index)=>{
    total+=item.price;
    cartItems.innerHTML+=`
    <p class="flex justify-between">
      ${item.title.slice(0,20)}
      <button onclick="removeItem(${index})" class="text-red-500">X</button>
    </p>`;
  });

  cartCount.innerText=cart.length;
  totalPriceEl.innerText=total.toFixed(2);
}

function removeItem(index){
  cart.splice(index,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function toggleCart(){
  cartSidebar.classList.toggle("translate-x-full");
}

function scrollToProducts(){
  document.getElementById("products-section").scrollIntoView({behavior:"smooth"});
}

loadProducts();
loadCategories();
