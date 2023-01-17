const bcyrpt = require("bcrypt")

const salt = bcyrpt.genSaltSync(1)

const hash = bcyrpt.hashSync("myPassword1234", salt)

console.log(hash)