import express from 'express'

const router = express.Router()
router.get('/', (req, res) => {
    res.render('payment', { title: 'Payment' })
})

router.post('/', (req, res) => {
    

})

export default router