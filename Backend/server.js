import express from "express"
import cors from "cors"
import { configDotenv } from "dotenv"   
import mongoose from "mongoose"
import authRoutes from "./routes/Authroute.js"
import {clerkMiddleware} from "@clerk/express"
configDotenv()

const app = express()
app.use(cors({
    origin: ["http://localhost:5173", "https://hackathon-platform-2cxc.vercel.app"],
    credentials: true
}))
app.use(express.json())
app.use(clerkMiddleware())
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello World!")
})
app.use("/api/auth", authRoutes)

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((err) => {
    console.error("Error connecting to MongoDB", err)
})
