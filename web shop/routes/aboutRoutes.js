import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.locals.pageStyles.push('./styles/header.css')
    res.render('about', { title: 'About' })
})

export default router