const bodyParser = require('express').json
const Router = require('express').Router
const db = require('../database/queries.js')

// this is the top level API router that includes other API routers
const router = new Router()

module.exports = router

// use the json body parser on all routes
router.use(bodyParser())

//call to create user
router.post('/create/user', async (req, res) => {
    console.log('made it this far');
    const { username, password, hp, company_id, inventory_id, role_id, image } = req.body
    db.createAccount(username, password, hp, company_id, inventory_id, role_id, image, async function (data) {
        if (data) {
           res.status(201).send('user created')
        }
        else {
           res.status(218).send('unable to create user')
        }
    })
})
