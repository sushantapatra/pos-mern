const Item =require('./../models/itemModel');
const getItemController=async(req,res)=>{
    try {
        const items =await Item.find();
        res.status(200).send(items);
    } catch (error) {
        console.log(error);
    }
}

const addItemController =async(req, res)=>{
    try {
       const newItem =new Item(req.body);
       const data= await newItem.save();
       res.status(201).send(data);
    } catch (error) {
     res.status(400).send("error", error);
        console.log(error);
    }
}

module.exports={getItemController,addItemController}