import express from 'express'

const router = express.Router()
router.get('/', (req, res) => {
    res.render('payment', { title: 'Payment' })
})

export default router

// create ui based on styles of attached Image. Page
// should have option to select payment: pay on delivery add
// card payment where user enters: card number, cvv and expiry date