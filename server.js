const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const cors = require("cors")
const router = require("./routes/routes.api")
const app = express()
const port = process.env.PORT
app.listen(port, () => {
 console.log(`Server is running on port ${port}`)
})
mongoose.connect(process.env.NODE_APP_API_DB).then(() => {console.log("Database connected")}).catch(() => {
 console.log("Failed to connect")
})
app.use(cors())
app.use(express.json())
app.use("/api", router)