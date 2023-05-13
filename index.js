const express = require("express")
const morgan =require("morgan")
const bodyParser =require("body-parser")
const cors =require("cors")
require("colors")

//database connection file
require('./connection')
//dotenv configuration
require("dotenv").config()

//rest object
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(morgan("dev"))

//routes
const itemRoutes =require("./routes/itemRoute");
app.use('/api/items', itemRoutes);

//default route
app.get('/', (req, res)=>{
    res.send('<h1>Welcome to POS Management system in MERN Stack Project</h1>')
})

//port
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Your server runs in localhost:${port}`.bgCyan.white);
})