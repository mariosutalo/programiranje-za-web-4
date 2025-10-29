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
        let cartItems = []
        results.forEach((row) => {
            const item = cartItems.find((cartItem => cartItem.id === row.id))
            if (item) {
                item.quantity = item.quantity + Number(row.quantity)
                item.productTotal = item.price * item.quantity
            } else {
                const newCartItem = {
                    id: row.id,
                    name: row.name,
                    price: Number(row.price),
                    quantity: Number(row.quantity),
                    imageUrl: row.image_url,
                    productTotal: row.price * row.quantity
                }
                cartItems.push(newCartItem)
            }
        })
        let totalProductsPrice = 0
        cartItems.forEach((cartItem) => {
            totalProductsPrice += cartItem.productTotal
        })
        const cartData = { total: totalProductsPrice, cartItems: cartItems }
        res.render('cart', { title: 'Cart', cartData: cartData })
    } catch (error) {
        res.render('error', { title: 'Error' })
    }

})

export default router