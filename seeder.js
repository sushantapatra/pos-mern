const mongoose =require("mongoose")
const dotenv =require("dotenv")
require("colors")

//database connection file
require('./connection')

const Item =require('./models/itemModel')
const items =require('./utils/itemData')

//dotenv configuration
dotenv.config()

//function seeder

const importData =async()=>{
    try {
        //await Item.deleteMany()
        const itemsdata =await Item.insertMany(items)
        console.log(`All items added`.bgGreen); 
        process.exit()
    } catch (error) {
        console.log(`Error : ${error}`.bgRed.inverse); 
        process.exit(1)
    }
}

importData()