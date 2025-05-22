import express from 'express'

const router = express.Router()

router.get('/login', (req, res) => {
    res.send('user logged in')
})

router.get('/profile', (req, res) => {
    const sessionId = req.cookies.sessionId
    if (sessionId) {
        res.send('user profile details')
    } else {
        res.send('access denied')
    }
})

router.get('/logout', (req, res) => {
    res.send('User logged')
})

export default router
