const zod = require('zod')

const user = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(8)
})

module.exports = {
    user
}