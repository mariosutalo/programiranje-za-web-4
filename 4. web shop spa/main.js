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

const productsCart = []
let totalCartAmmount = 0

function displayProducts(filteredProducts) {
    const productsDiv = document.querySelector('.products-div')
    productsDiv.innerHTML = ""
    if (filteredProducts) {
        filteredProducts.forEach((product) => {
            const genHtml = generateProductHTML(product)
            productsDiv.innerHTML += genHtml
        })
    } else {
        products.forEach((product) => {
            const genHtml = generateProductHTML(product)
            productsDiv.innerHTML += genHtml
        })
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
            <button id="${product.id}" class="add-to-cart-btn" onclick="addToCart(event)">u košaricu</button>
        </div>`
    return generatedHtml
}

function filterProducts() {
    const filteredProducts = []
    const inputElement = document.getElementById('products-input')
    const searchTerm = inputElement.value
    if (searchTerm === "") {
        displayProducts()
        return
    }
    products.forEach((product) => {
        const productNameLowerCase = product.name.toLowerCase()
        const searchTermLowerCase = searchTerm.toLowerCase()
        if (productNameLowerCase.includes(searchTermLowerCase)) {
            filteredProducts.push(product)
        }
    })
    displayProducts(filteredProducts)
}

function addToCart(e) {
    const productID = e.target.id
    getProductById(productID)
}

function getProductById(productId) {
    products.forEach((product) => {
        // double equal se koristi u ovom slučaju
        // jer uspoređujemo string i number i ako su jednaki
        // da uvjet bude zadovoljen, npr: "2" = 2
        if (productId == product.id) {
            // pozovi funkciju updateCart ako je uvjet ispunjen
            updateCart(product)
        }
    })
}

function updateCart(product) {
    // dodaj proizvod u products polje(array)
    productsCart.push(product)
    // stavi ukupnu vrijednost kosarice na 0
    totalCartAmmount = 0
    // u for each petlji ce se svi proizvodi ponovno zbrojiti i 
    // staviti totalcartamount
    productsCart.forEach((product) => {
        totalCartAmmount += product.price
    })
    // pomocu dom-a povuci span element u cartSpan varijablu
    const cartSpan = document.getElementById('cart-span')
    // postavi totalCartAmmount u cartSpan inner html
    cartSpan.innerHTML = `${totalCartAmmount}$`
}

function forEachDemo() {
    const numbers = [2, 5, 8, 7, 8]
    let sum = 0
    // for (let index = 0; index < numbers.length; index++) {
    //     const element = numbers[index];
    //     sum += element
    // }
    numbers.forEach((number) => {
        sum += number
    })

    console.log(`Sum of numbers is ${sum}`)
}

// for (let index = 0; index < filteredProducts.length; index++) {
//     const product = filteredProducts[index]
//     const genHtml = generateProductHTML(product)
//     productsDiv.innerHTML += genHtml
// }