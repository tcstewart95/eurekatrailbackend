const bodyParser = require('express').json
const Router = require('express').Router
const db = require('../database/queries.js')

// this is the top level API router that includes other API routers
const router = new Router()

// use the json body parser on all routes
router.use(bodyParser())

//call to create user
router.post('/create/user', (req, res) => {
    console.log(req.query);
    const { username, firstname, lastname, password, hp, company_id, inventory_id, role_id, image, authenticated, } = req.query
    db.createAccount(username, firstname, lastname, password, hp, company_id, inventory_id, role_id, image, authenticated, function (data) {
        if (data) {
           res.status(201).send('user created')
        }
        else {
           res.status(218).send('unable to create user')
        }
    })
})

module.exports = router
