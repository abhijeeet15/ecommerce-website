const productData = [
    {
        "href": "https://www.westside.com/collections/trending-now-western-wear-for-women/products/luna-blu-ivory-multi-strap-slides-300981705",
        "image": "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/300981705IVORY_1.jpg?v=1718976445",
        "vendor": "LUNA BLU",
        "title": "LUNA BLU Ivory Multi-Strap Slides",
        "price": "₹ 999.00",
        "category": "blue"
    },
];

function renderProducts(products) {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = '';  // Clear previous products

    products.forEach(product => {
        const productElem = `
            <div class="product ${product.category}">
                <a href="${product.href}" target="_blank">
                    <img src="${product.image}" alt="${product.title}">
                </a>
                <h2>${product.title}</h2>
                <p>${product.price}</p>
            </div>
        `;
        productContainer.innerHTML += productElem;
    });
}

function filterItems() {
    const filter = document.getElementById('filter').value;
    const filteredProducts = filter === 'all' 
        ? productData 
        : productData.filter(product => product.category === filter);
    renderProducts(filteredProducts);
}

function sortItems() {
    const sort = document.getElementById('sort').value;
    const sortedProducts = [...productData].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return sort === 'asc' ? priceA - priceB : priceB - priceA;
    });
    renderProducts(sortedProducts);
}

renderProducts(productData);
