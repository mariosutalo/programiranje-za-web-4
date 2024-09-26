const products = [
    { name: 'Acer Swift 3', price: 500, weight: 1.2 },
    { name: 'Acer Swift 1', price: 220, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
    { name: 'Acer Swift 2', price: 400, weight: 1.0 },
]


function displayDetails(product) {
    const p = `<p>Name: ${product.name}, price: ${product.price}, weight: ${product.weight}</p>`
    const div = document.querySelector('.products-info-div')
    div.innerHTML += p
}

for(i = 0; i < products.length; i++) {
    const product = products[i]
    displayDetails(product)
}



// for(i = 0; i < 5; i++) {
//     console.log("inside for loop")
//     console.log("inside for loop")
// }

/*1. korak for petlje: napravi varijalbu sa određenom vrijednošću
npr i = 0.
2. korak gleda kolika je max vrijednost varijable, npr i<5.
3. korak ako varijabla zadovoljava uvijet,
kod unutar zagrada se izvršava.
4. korak */

// const products = [1,5,3]
// console.log(products.length)

// for(i = 0; i < products.length; i++) {
//     const value = products[i]
//     console.log(value)
// }








