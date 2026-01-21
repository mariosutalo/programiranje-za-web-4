import express from 'express'
import { db } from '../app.js'


const router = express.Router()

router.get('/', (req, res) => {
    res.render('checkout', { title: 'Checkout' })
})

router.post('/', async (req, res) => {
    const shippingData = req.body
    console.log('form data', shippingData)
    const getCartProductsQuery = `
    SELECT c.product_id as productId, c.quantity, p.price
    from cart_items as c
    join products p on c.product_id = p.id;`
    const cartItemsResponse = await db.execute(getCartProductsQuery)
    console.log('Cart items:', cartItemsResponse[0])
    await db.beginTransaction()
    try {
        const createOrderSql = `insert into orders(full_name, street, zip_code, city, phone, session_guid)
                            values (?,?,?,?,?,?)`
        const insertOrderResult = await db.execute(createOrderSql, [
            shippingData.fullname,
            shippingData.street,
            shippingData.zipcode,
            shippingData.city,
            shippingData.phone,
            req.cookies.sessionId
        ])

        
    } catch (error) {
        await db.rollback()
        console.log('error creating order', error)
    }
    await db.commit()



    res.redirect(req.get('Referrer') || '/')
})

export default router