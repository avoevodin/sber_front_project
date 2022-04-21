const { db } = require("../DB");
const users = db.users

const checkDubplicateUsernameOrEmail = (req, res, next) => {
    if (users.find((user) => user.username === req.body.username)) {
        res.status(400).send({
            message: "Failed! Username is already in use!",
        });
        return
    }
    if (users.find((user) => user.email === req.body.email)) {
        res.status(400).send({
            message: "Failed! Email is already in use!",
        });
        return
    }
    next()  
}

const verifySignUp = {
    checkDubplicateUsernameOrEmail: checkDubplicateUsernameOrEmail,
}

module.exports = verifySignUp
