const bodyParser = require('express').json
const Router = require('express').Router
const db = require('../database/queries.js')

// this is the top level API router that includes other API routers
const router = new Router()

// use the json body parser on all routes
router.use(bodyParser())

router.post('/user/checkexists', (req, res) => {
    const {email} = req.body
    db.checkexists(email, function(data) {
        if(data) {
            res.status(201).send(data)
        }
        else {
            res.status(218).send('unable to check if user exists')
        }
    })
})

router.post('/user/create', (req, res) => {
    const {email, firstname, lastname, hp, company_id, inventory_id, image, authenticated} = req.body
    db.createAccount(email, firstname, lastname, hp, company_id, inventory_id, image, authenticated, function (data) {
        if (data) {
           res.status(201).send('user created')
        }
        else {
           res.status(218).send('unable to create user')
        }
    })
})

router.post('/user/delete', (req, res) => {
    const {email} = req.body
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
    const {email} = req.body
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
    const {email} = req.body
    db.logout(email, function(data) {
        if(data) {
            res.status(201).send('user logged out')
        }
        else {
            res.status(218).send('unable to logout user')
        }
    })  
})




//complete but needs testing
router.post('/user/getID', (req, res) => {
    const {email} = req.body
    db.getID(email, function(data) {
        if(data) {
            res.status(201).send(data)
        }
        else {
            res.status(218).send('unable to retrieve user id')
        }
    })  
})

//needs update
router.post('/user/add/role', (req, res) => {
    const {id, hp, inventoryId, roleId} = req.body
    db.addRole(id, hp, inventoryId, roleId, function(data) {
        if(data) {
            res.status(201).send('user role added')
        }
        else {
            res.status(218).send('unable to add user role')
        }
    })  
})

//needs testing
router.post('/inventory/addPlayer', (req, res) => {
    const {player_id} = req.body
    db.addPlayerInventory(player_id, function(data) {
        if(data) {
            res.status(201).send(data)
        }
        else {
            res.status(218).send('unable to add inventory to user')
        }
    })  
})




module.exports = router
