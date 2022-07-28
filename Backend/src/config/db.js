const mongoose = require("mongoose")
require('dotenv').config()

const url = process.env.MONGODB_URL

const connect = mongoose.connect(url)

module.exports = connect