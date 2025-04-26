const jwt = require("jsonwebtoken")
const secretKey = process.env.SECRET_KEY

exports.generate = async(payload) => {
    if(!secretKey || !payload){
        console.log(`${!secretKey ? "secretKey" : "payload"} is not defined`)
        return
    }

    return jwt.sign(payload, secretKey, {expiresIn: "3h"})
}

exports.verify = async(res, res) => {

}