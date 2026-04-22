import express from 'express'
import { db } from '../app.js'


const router = express.Router()

router.get('/', async (req, res) => {
    const getUserDataQuery = `
        select full_name as fullName, street, city, phone
        from orders where session_guid = ?
    `
    const totalPaymentQuery = `
        SELECT quantity, price
        FROM order_items
        WHERE order_id = (
        SELECT id
        FROM orders
        WHERE session_guid = '?'
        LIMIT 1
        );
    `
    try {
        const userDetailsDbResponse = await db.execute(getUserDataQuery, [req.cookies.sessionId])
        const totalPaymentDbResponse = await db.execute(totalPaymentQuery, [req.cookies.sessionId])
    } catch (error) {
        res.render('error', { title: 'error on page' })
    }
    res.render('summary', { title: 'Summary' })
})

export default router