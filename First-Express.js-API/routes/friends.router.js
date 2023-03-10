const express = require("express")

const frindsController = require("../controllers/friends.controller")

const friendsRouter = express.Router()

friendsRouter.use((req,res, next) => {
    console.log('Ip adress: ', req.ip);
    next();
})
friendsRouter.post('/', frindsController.postFriend)
friendsRouter.get('/', frindsController.getFriends)
friendsRouter.get('/:friendID', frindsController.getFriend)

module.exports = friendsRouter;