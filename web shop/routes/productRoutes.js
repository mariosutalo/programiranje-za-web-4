import express from 'express'
import productSpecsToArray from '../util/util.js'

const router = express.Router()

router.get('/', async (req, res) => {
    res.locals.pageStyles.push('./styles/productDetails.css')
    res.locals.pageStyles.push('./styles/header.css')
    const db = req.app.locals.db

    const productId = req.query.product_id

    const getProductDetailsQueryDangeroues = `select products.*, product_images.image_url
        from products left join product_images
        on products.id = product_images.product_id
        where products.id = ${productId};`

    const getProductDetailsQueryWithPlaceholdersSafe = `select products.*, product_images.image_url
        from products left join product_images
        on products.id = product_images.product_id
        where products.id = ?;`

    try {
        const [productDetailsResult, fields] = await db.query(getProductDetailsQueryWithPlaceholdersSafe, [productId])
        let product = null
        productDetailsResult.forEach((row) => {
            if (product === null) {
                product = {
                    id: row.id,
                    name: row.name,
                    specs: productSpecsToArray(row.specs),
                    price: row.price,
                    image: row.image_url,
                    stock: row.stock,
                    likes: row.likes,
                    warranty: row.warranty,
                    description: row.description,
                    images: []
                }
            }
            product.images.push(row.image_url)
        })
        if (product !== null) {
            console.log(`product with images:`, product)
            res.render('product details', { title: product.productName, productDetails: product })
        } else {
        }

    } catch (error) {
        console.log('Error fetching product details', error)
    }
})

export default router