const jwt = require("jsonwebtoken");
const {env} = require("../../config")

const sign = (payload: any) => 
      jwt.sign(payload, env.JWT_SECRET_KEY, {expiresIn: "12h"})

const verify = (payload: string) => jwt.verify(payload, env.JWT_SECRET_KEY);


module.exports = {
    sign,
    verify
}