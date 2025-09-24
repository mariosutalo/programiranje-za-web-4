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
                            left join products p on c.product_id = p.id
                            where c.session_guid = ?`
    try {
        const [results, fields] = await db.execute(cartProductsQuery, [sessionId])
        console.log(results)
        res.render('cart', { title: 'Cart' })
    } catch (error) {
        res.render('error', { title: 'Error' })
    }

})

export default router