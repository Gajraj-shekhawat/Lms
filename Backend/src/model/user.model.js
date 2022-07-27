const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    course: { type: String, required: true },
    l1: { type: Boolean, default: false },
    l2: { type: Boolean, default: false },
    l3: { type: Boolean, default: false },
    l4: { type: Boolean, default: false },
    l5: { type: Boolean, default: false },
    a1: { type: Boolean, default: false },
    a2: { type: Boolean, default: false },
    a3: { type: Boolean, default: false },
    a4: { type: Boolean, default: false },
    a5: { type: Boolean, default: false },
}, { versionKey: false })

const UserModel = mongoose.model("user", schema)

module.exports = UserModel