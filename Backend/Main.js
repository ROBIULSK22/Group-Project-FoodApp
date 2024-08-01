const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
mongoose.connect("mongodb://localhost:27017/AppData").then(()=>console.log("connected sucessfully")).catch(err=>console.log(err));
const userDetails = new mongoose.Schema({
    userid:String,
    password:String,
    address:String,
});
const orderdetails = new mongoose.Schema({
    userid:String,
    cheesandcorn:Number,
    capsicum:Number,
    margherita:Number,
    onion:Number,
    address:String,
    totalamount:Number,
})
const details = mongoose.model("userDetails",userDetails);
const odetails = mongoose.model("orderdetails",orderdetails);
const app = express();
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get("/",function(req,res){res.send("hello world")})
app.post("/createAccount",(req,res)=>{
    details.create({
        userid:req.body.userid,
        password:req.body.password,
        address:req.body.address,
    }).then(()=>res.json({mesg:"Registration Successfull"})).catch((err)=>res.json({mesg:"error!"}))

})
app.post("/checklogin",(req,res)=>{
    const uid = req.body.userid;
    const pwd = req.body.password;
    details.findOne({"userid":uid}).then((mydata)=>{
        if(mydata){
            if(pwd == mydata.password){
                res.json({userid:mydata.userid,address:mydata.address})
            }
            else{
                res.send(false)
            }
        }else{
            res.send(false)
        }
    }).catch((err)=>console.log(err));
})
app.post("/placeorder",(req,res)=>{
    odetails.create({
    userid:req.body.userid,
    cheesandcorn:req.body.cheesandcorn,
    capsicum:req.body.capsicum,
    margherita:req.body.margherita,
    onion:req.body.onion,
    address:req.body.address,
    totalamount:req.body.totalamount,
    }).then((data)=>res.json({orderid:data._id.toString()})).catch((err)=>res.json({mesg:"Order did not place, Please Try again"})); 
})
app.listen(3000);