const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.config')
const { db } = require('../DB')
const users = db.users

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]

    if (!token) {
        return res.status(403).send({
            message: 'No token provided!'
        })
    }
    
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
            let resData
            if (err.expiredAt) {
                resData = {
                    status: 403,
                    message: "Token has expired!"
                }
            } else {
                resData = {
                    status: 401,
                    message: "Unauthorized!"
                }
            }

            return res.status(resData.status).send({
                message: resData.message,
            })
        }
        req.userId = decoded.id
        next()
    })
    
}

module.exports = verifyToken
