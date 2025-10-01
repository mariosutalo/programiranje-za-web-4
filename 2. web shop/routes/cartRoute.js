import { db } from '../app.js'
import express from 'express'
const router = express.Router()

router.get('/', async (req, res) => {
    const sessionId = req.cookies.sessionId
    if (!sessionId) {
        res.render('cart', { title: 'Cart' })
        return
    }
    const cartProductsQuery = `select p.name, c.quantity, p.price, p.id, p.image_url
                            from cart_items c
                            join products p on c.product_id = p.id
                            where c.session_guid = ?`
    try {
        const [results, fields] = await db.execute(cartProductsQuery, [sessionId])
        console.log('Cart content:', results)
        let cartProducts = []
        results.forEach((row) => {
            const item = cartProducts.filter((cartItem => cartItem.id === row.id))
            if (item && item.length > 0) {

            } else {
                const newProductItem = {
                    id: row.id,
                    name: row.name,
                    price: row.price,
                    quantity: row.quantity,
                    imageUrl: row.image_url,
                    productTotal: row.price * row.quantity
                }
            }
        })
        res.render('cart', { title: 'Cart' })
    } catch (error) {
        res.render('error', { title: 'Error' })
    }

})

export default router