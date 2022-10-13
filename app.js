require("dotenv").config()
const express = require("express")
const app = express()
const connectDB = require('./Config/db')
connectDB();
//error handller middlware
const {errorHandler} = require("./Middlewares/errorMiddleware")

// require routes in folder routes
const UserRouter = require("./Routes/authRoute")
const clientRouter = require("./Routes/clientRoute")
const managerRouter = require("./Routes/managerRoute")
const livreurRouter = require("./Routes/livreurRoute")



app.use(express.json())

app.use("/api/user",clientRouter)
app.use("/api/user",managerRouter)
app.use("/api/user",livreurRouter)
app.use("/api/auth",UserRouter)
app.use(errorHandler)

port = process.env.PORT || 5000;

// start server
app.listen(port, ()=> console.log("Server Started: "+port))
