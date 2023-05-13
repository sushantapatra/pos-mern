const mongoose =require("mongoose")
require("colors")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URI).then(()=>console.log(`MongoDB Connected..`.bgYellow)).catch(error =>{
    console.log(`Error : ${error}`.bgRed);
    process.exit(1)
})
