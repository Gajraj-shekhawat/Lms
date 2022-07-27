const express = require("express")
const cors = require('cors')
const connect = require("./config/db")
const authRouter = require("./routes/user.route")

require('dotenv').config()
const PORT = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())


app.use("/user", authRouter)

app.get("/", async (req, res) => {
    res.send("<h1>Welcome In Team Tiranga</h1>")
})



app.listen(PORT, async () => {
    try {
        await connect
        console.log("Connected to server")
        console.log(`Server is available on port no. ${PORT}`)
    } catch {
        console.log("Refused to connect")
    }
    
})