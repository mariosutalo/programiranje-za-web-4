import express from 'express'
import { db } from '../app.js'

const router = express.Router()
router.get('/', (req, res) => {
    res.render('payment', { title: 'Payment' })
})

router.post('/', async (req, res) => {
    const paymentType = 'card'
    const sessionId = req.cookies.sessionId
    const updateOrderQuery = `
        update orders
        set payment_type = ?
        where session_guid = ?;
    `
    try {
        const [result, fields] = await db.execute(cartProductsQuery, [paymentType, sessionId])
        res.redirect('/summary')

    } catch (error) {
        res.render('error', { title: 'error finishing order' })
    }





})

export default router