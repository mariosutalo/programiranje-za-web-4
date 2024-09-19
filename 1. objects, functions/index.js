const product1 = {
    name: 'Acer Swift 3',
    price: 500,
    weight: 1.2
}
const product2 = {
    name: 'Acer Swift 1',
    price: 220,
    weight: 1.0
}
const product3 = {
    name: 'Acer Swift 2',
    price: 400,
    weight: 1.0
}

function displayDetails(product) {
    const p = `<p>Name: ${product.name}, price: ${product.price}, weight: ${product.weight}</p>`
    const div = document.querySelector('.products-info-div')
    div.innerHTML += p
}

displayDetails(product1)
displayDetails(product2)
displayDetails(product3)

