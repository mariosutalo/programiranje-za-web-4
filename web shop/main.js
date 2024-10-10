const products = [
    {
        id: 1,
        image: 'https://www.instar-informatika.hr/slike/velike/racunalo-instar-gamer-profundis-intel-core-i3-10100f-up-to-4-21154-10100f-pro-ssd500-1650_208307.jpg',
        name: 'Računalo i3 10100F',
        details: 'https://www.instar-informatika.hr/racunalo-instar-gamer-profundis-intel-core-i3-10100f-up-to-430ghz-8/99889/product/',
        procesor: 'Intel i3 10100',
        ram: '16gb',
        gpu: 'nvidia 1650',
        price: 550
    },
    {
        id: 2,
        image: 'https://www.instar-informatika.hr/slike/male/racunalo-instar-gamer-prime-intel-core-i5-10400f-up-to-43ghz-36794-10400f-pri-ssd500-1650_1.jpg',
        name: 'Računalo i5 12000F',
        details: 'https://www.instar-informatika.hr/racunalo-instar-gamer-prime-intel-core-i5-10400f-up-to-43ghz-16gb-d/99887/product/',
        procesor: 'Intel i5 12000',
        ram: '16gb',
        gpu: 'nvidia 1650',
        price: 600
    },
]

function displayProducts(filteredProducts) {
    const productsDiv = document.querySelector('.products-div')
    productsDiv.innerHTML = ""
    if (filteredProducts) {
        for (let index = 0; index < filteredProducts.length; index++) {
            const product = filteredProducts[index]
            const genHtml = generateProductHTML(product)
            productsDiv.innerHTML += genHtml
        }
    } else {
        for (let index = 0; index < products.length; index++) {
            const product = products[index]
            const genHtml = generateProductHTML(product)
            productsDiv.innerHTML += genHtml
        }
    }
}

function generateProductHTML(product) {
    const generatedHtml = `<div class="product-div">
            <img src="${product.image}" alt="" class="product-img">
            <a href="${product.details}" class="product-details-link">${product.name}</a>
            <p class="cpu-p">procesor: ${product.procesor}</p>
            <p class="ram-p">ram: ${product.ram}</p>
            <p class="gpu-p">grafika: ${product.gpu}</p>
            <span class="price-span">${product.price}$</span>
            <button class="add-to-cart-btn">u košaricu</button>
        </div>`
        return generatedHtml
}

function filterProducts() {
    const filteredProducts = []
    const inputElement = document.getElementById('products-input')
    const searchTerm = inputElement.value
    for(i = 0; i < products.length; i++) {
        const product = products[i]
        if (product.name === searchTerm) {
            filteredProducts.push(product)
        }
    }
    displayProducts(filteredProducts)
}

