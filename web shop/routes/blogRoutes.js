import express from 'express'
import { db } from '../app.js'

const router = express.Router()

router.get('/', async (req, res) => {
    const selectAllBlogsQuery = 'select * from blogs'
    const [results, fields] = await db.execute(selectAllBlogsQuery)
    res.render('blogs', { title: 'Blog', blogs: results })
})

router.get('/readBlog', async (req, res) => {
    const blogId = req.query.blogId
    const selectSingleBlogQuery = 'select * from blogs where id = ?'
    const [results, fields] = await db.execute(selectSingleBlogQuery, [blogId.toString()])
    res.render('singleBlog', { title: `${blogId}`, blog: results[0] })
})

export default router