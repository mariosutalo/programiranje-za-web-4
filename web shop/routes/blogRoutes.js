import express from 'express'

const router = express.Router()

router.get('/', (req, res)=> {
    res.render('blogs', { title: 'Blog' })
})

router.get('/read', (req, res) => {
    res.render('singleBlog', { title: 'Single blog'})
})

export default router