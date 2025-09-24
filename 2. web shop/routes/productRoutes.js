import express from 'express'
import { db } from '../app.js'
import productSpecsToArray from '../util/util.js'
import { z } from 'zod'
const router = express.Router()

const addToCartSchema = z.object({
    id: z.number().min(0),
    quantity: z.number().gt(0)
})

router.get('/', async (req, res) => {
    // sql injection attack example
    //http://localhost:3000/product?product_id=1; delete from product_images; - try it :)
    // SELECT * from products where id = 1; delete from product_images;
    const productId = req.query.product_id

    // variable interpolation - unsafe
    const getProductDetailsQueryDangeroues = `select products.*, product_images.image_url
        from products left join product_images
        on products.id = product_images.product_id
        where products.id = ${productId};`

    // parametrized query - safe
    const getProductDetailsQueryWithPlaceholdersSafe = `select products.*, product_images.image_url
        from products left join product_images
        on products.id = product_images.product_id
        where products.id = ?;`

    try {
        // const [productDetailsResult, fields] = await db.query(getProductDetailsQuery)
        const [productDetailsResult, fields] = await db.query(getProductDetailsQueryWithPlaceholdersSafe, [productId])
        let product = null
        productDetailsResult.forEach((row) => {
            if (product === null) {
                product = {
                    id: row.id,
                    name: row.name,
                    specs: productSpecsToArray(row.specs),
                    price: row.price,
                    image: row.image_url,
                    stock: row.stock,
                    likes: row.likes,
                    warranty: row.warranty,
                    description: row.description,
                    images: []
                }
            }
            product.images.push(row.image_url)
        })
        if (product !== null) {
            res.render('product details', { title: product.productName, productDetails: product })
        } else {
            // to do implement product doesn't exist page
        }

    } catch (error) {
        console.log('Error fetching product details', error)
    }
})

router.post('/add-to-cart', async (req, res) => {
    // res.render('error', {title: 'Error on page'})
    // return

    const productData = req.body
    const productDataTransformed = {
        id: Number(productData.id),
        quantity: Number(productData.quantity)
    }
    const validationResult = addToCartSchema.safeParse(productDataTransformed)
    if (!validationResult.success) {
        res.render('error', { title: 'Error on page' })
        return
    }
    const addToCartData = validationResult.data
    const checkIfSessionExistsQuery = `SELECT count(*) as count FROM webshop.sessions
                                        where guid = ?`
    const sessionId = req.cookies.sessionId
    const [result, fields] = await db.execute(checkIfSessionExistsQuery, [sessionId])
    const guidCount = result[0].count
    if (guidCount === 0) {
        const insertGuidInSessionQuery = `insert into sessions(guid)
                                      values (?)`
        const [insertResult, insertFields] = await db.execute(insertGuidInSessionQuery, [sessionId])
        const affectedRowsCount = insertResult.affectedRows
    }
    const addToCartQuery = `insert into cart_items (product_id, quantity, session_guid) 
                            values (?, ?, ?)`
    const [addToCartResult, addToCartFields] = await db.execute(addToCartQuery, [addToCartData.id.toString(), addToCartData.quantity.toString(), sessionId])
    if (addToCartResult.affectedRows === 0) {
        res.render('error', { title: 'Error on page' })
        return
    }
    res.redirect(req.get('Referrer') || '/')
})

export default router