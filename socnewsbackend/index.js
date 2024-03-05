let express = require("express")
let mongoose = require("mongoose")


const app = express();
let cors=require("cors")

app.use(cors())

require("dotenv").config();

const PORT = process.env.PORT || 4000

app.use(express.json());

require("./config/database").connect(); 

// route import and mount
//import
let userRouter = require("./routes/userRoutes")
let newsRouters=require("./routes/newsRoutes")
let profileRouters=require("./routes/profileRoute")
//mount
app.use("/",userRouter)
app.use("/news",newsRouters)
app.use("/profile",profileRouters)
//actuivate
app.listen(PORT,()=>{
    console.log(`APP IS LISTENIING AT ${PORT}`);
})