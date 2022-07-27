const { Router } = require("express")
const UserModel = require("../model/user.model")
const authRouter = Router()




authRouter.post('/signup', async (req, res) => {
    const { email, password, name } = req.body

    const varify = await UserModel.find({ email })
    if (varify.length > 0) {
        return res.status(300).send({ message: "User already exist" })
    }
    const user = await UserModel(req.body)
    user.save((err, success) => {
        if (err) {
            return res.status(500).send({ message: err.message })
        }
       return res.status(201).send({ message: "Congratulations your account has been created" ,success})
    })

})

authRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body
    const user = await UserModel.find({ email, password })
    if (user.length > 0) {
        let { name, email, _id } = user[0]
        return res.send(_id)
    }
    res.send({ message: "Wrong credentials" })

})

authRouter.get('/:_id', async (req, res)=>{
    const {_id}= req.params
    const user = await UserModel.find({_id})
    res.status(200).send(user)
})

module.exports = authRouter