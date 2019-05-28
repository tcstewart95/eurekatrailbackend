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
    const {email, firstname, lastname, hp, company_id, image, authenticated} = req.body
    db.createAccount(email, firstname, lastname, hp, company_id, image, authenticated, function (data) {
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


router.post('/user/add/role', (req, res) => {
    const {id, hp, roleId} = req.body
    db.addRole(id, hp, roleId, function(data) {
        if(data) {
            res.status(201).send('user role added')
        }
        else {
            res.status(218).send('unable to add user role')
        }
    })  
})


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


router.post('/inventory/checkExist', (req, res) => {
    const {player_id} = req.body
    db.checkinventoryexists(player_id, function(data) {
        if(data) {
            res.status(201).send(data)
        }
        else {
            res.status(218).send('unable to add inventory to user')
        }
    })  
})


router.post('/caravan', (req, res) => {
    const {name, feed_id, inventory_id, location_id, image_path, public} = req.body
    db.createCaravan(name, feed_id, inventory_id, location_id, image_path, public, function (data) {
        if (data) 
            res.status(201).send('caravan created')
            
        else
            res.status(218).send('unable to create caravan')
    })
})


router.post('/caravan/getId', (req, res) => {
    const {email} = req.body
    db.getCaravanId(email, function (data) {
        if (data) {
            res.status(201).send(data)
        } 
        else {
            res.status(201).send('Unable to get caravan members')
        } 
    })
})


router.post('/caravan/getMembers', (req, res) => {
    const {caravan_id} = req.body
    db.selectCaravan(caravan_id, function (data) {
        if (data) {
            res.status(201).send(data)
        } 
        else {
            res.status(201).send('Unable to get caravan members')
        } 
    })
})


router.post('/caravan/getRoles', (req, res) => {
    const {caravan_id} = req.body
    db.getCaravanMemberRoles(caravan_id, function(data) {
        if (data) {
            res.status(201).send(data)
        } 
        else {
            res.status(201).send('Unable to get caravan member roles')
        } 
    })
})


module.exports = router
