const products = [
    {
      name: 'Sony Playstation 5',
      url: 'img/products/playstation_5.png',
      category: 'games',
      price: 499.99,
    },
    {
      name: 'Samsung Galaxy',
      url: 'img/products/samsung_galaxy.png',
      category: 'smartphones',
      price: 399.99,
    },
    {
      name: 'Cannon EOS Camera',
      url: 'img/products/cannon_eos_camera.png',
      category: 'cameras',
      price: 749.99,
    },
    {
      name: 'Sony A7 Camera',
      url: 'img/products/sony_a7_camera.png',
      category: 'cameras',
      price: 1999.99,
    },
    {
      name: 'LG TV',
      url: 'img/products/lg_tv.png',
      category: 'televisions',
      price: 799.99,
    },
    {
      name: 'Nintendo Switch',
      url: 'img/products/nintendo_switch.png',
      category: 'games',
      price: 299.99,
    },
    {
      name: 'Xbox Series X',
      url: 'img/products/xbox_series_x.png',
      category: 'games',
      price: 499.99,
    },
    {
      name: 'Samsung TV',
      url: 'img/products/samsung_tv.png',
      category: 'televisions',
      price: 1099.99,
    },
    {
      name: 'Google Pixel',
      url: 'img/products/google_pixel.png',
      category: 'smartphones',
      price: 499.99,
    },
    {
      name: 'Sony ZV1F Camera',
      url: 'img/products/sony_zv1f_camera.png',
      category: 'cameras',
      price: 799.99,
    },
    {
      name: 'Toshiba TV',
      url: 'img/products/toshiba_tv.png',
      category: 'televisions',
      price: 499.99,
    },
    {
      name: 'iPhone 14',
      url: 'img/products/iphone_14.png',
      category: 'smartphones',
      price: 999.99,
    },
  ];

  //DOM
  const checkboxes = document.querySelectorAll('.check');
  const filtersContainer = document.getElementById('filters-container');
  const searchInput = document.getElementById('search');
  const cartCount = document.getElementById('cart-count');
  const productsWrapper = document.getElementById('products-wrapper');

  // Init cart item count
  let cartItemCount = 0;

  // Init product element array
  const productElements = [];

  // Loop over products and create an element
  products.forEach((product) => {
   const productElement = createProductElement(product)

    productElements.push(productElement);
    productsWrapper.appendChild(productElement)
    
  });

  // Create product element 
  function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.className = 'item space-y-2';
    productElement.innerHTML = `
        <div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl">
            <img src="${product.url}" alt="${product.name}" class="w-full h-full object-cover">
            <button class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0">
                Ajouter au panier
            </button>
        </div>
        <p class="text-xl">${product.name}</p>
        <strong>${product.price.toLocaleString()} €</strong>
    `;

    productElement.querySelector('.status').addEventListener('click', updateCart);

    return productElement;
  }

  // Add or remove item from cart
  function updateCart(e) {
    const statusEl = e.target;
    
    if (statusEl.classList.contains('added')) {
        statusEl.classList.remove('added');
        statusEl.innerText = 'Ajouter au panier';
        statusEl.classList.add('bg-gray-800');
        statusEl.classList.remove('bg-red-600');

        cartItemCount--;
    } else {
        statusEl.classList.add('added');
        statusEl.innerText = 'Retirer du panier';
        statusEl.classList.remove('bg-gray-800');
        statusEl.classList.add('bg-red-600');

        cartItemCount++
    }
    
    // Update cart item count
    cartCount.innerText = cartItemCount.toString()
  }