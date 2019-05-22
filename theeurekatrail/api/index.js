const bodyParser = require('express').json
const Router = require('express').Router
const db = require('../database/queries.js')

// this is the top level API router that includes other API routers
const router = new Router()

// use the json body parser on all routes
router.use(bodyParser())

router.post('/user/checkexists', (req, res) => {
    const {email} = req.query
    db.checkexists(email, function(data) {
        if(data) {
            res.status(201).send('user exists')
        }
        else {
            res.status(218).send('unable to check if user exists')
        }
    })
})

router.post('/user/create', (req, res) => {
    const {email, firstname, lastname, hp, company_id, inventory_id, role_id, image, authenticated} = req.query
    db.createAccount(email, firstname, lastname, hp, company_id, inventory_id, role_id, image, authenticated, function (data) {
        if (data) {
           res.status(201).send('user created')
        }
        else {
           res.status(218).send('unable to create user')
        }
    })
})

router.post('/user/delete', (req, res) => {
    const {email} = req.query
    db.deleteUser(email, function(data) {
        if(data) {
            res.status(201).send('user deleted')
        }
        else {
            res.status(218).send('unable to delete user')
        }
    })
})

router.post('/user/login', (req, res) => {
    const {email} = req.query
    db.login(email, function(data) {
        if(data) {
            res.status(201).send('user logged in')
        }
        else {
            res.status(218).send('unable to login user')
        }
    })
})

router.post('/user/logout', (req, res) => {
    const {email} = req.query
    db.logout(email, function(data) {
        if(data) {
            res.status(201).send('user logged out')
        }
        else {
            res.status(218).send('unable to logout user')
        }
    })  
})

module.exports = router
