const express  = require("express")
const connectDB = require("./database/db")
const authRoutes = require("./routes/auth.routes")


const app = express()

connectDB()

app.use(express.json())
app.use("/auth", authRoutes)

module.exports = app