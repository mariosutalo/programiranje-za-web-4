import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.locals.pageStyles.push('./styles/header.css')
    res.render('blog', { title: 'Blog' })
})

export default router