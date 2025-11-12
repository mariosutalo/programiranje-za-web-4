import express from 'express'

const router = express.Router()

router.get('/', (req, res)=> {
    res.render('checkout', { title: 'Checkout' })
})

router.post('/', (req, res) => {
    const shippingData = req.body
    console.log(shippingData)
    res.redirect(req.get('Referrer') || '/')
})

export default router