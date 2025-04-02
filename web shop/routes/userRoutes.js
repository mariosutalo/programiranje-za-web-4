import express from 'express'

const router = express.Router()

router.get('/login', (req, res) => {
    res.cookie('sessionId', 'fds3r3rew3r', {
        maxAge: 60 * 2 * 1000,
        httpOnly: true,
        sameSite: 'strict'
    })
    res.send('cookies has been set')
})

router.get('/sensitivedata', (req, res) => {
    const user = req.cookies.user
    if (user) {
        res.send('user login')
    } else {
        res.send(' no cookie found')
    }
})

router.get('/logout', (req, res) => {
    res.clearCookie('sessionId')
    res.send('Cookies has been deleted')
})

export default router
