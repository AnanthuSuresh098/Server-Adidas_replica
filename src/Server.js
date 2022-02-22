const express =require ("express")
const connect = require("./config/db");


const app=express();

app.use(express.json());


app.post("/",(req,res)=>{
 try{
     console.log(req.body)
     return res.send(req.body)
 } catch (err){
     res.status(500).send(err.message)
 }
})


app.listen(process.env.PORT||5000,async()=>{
   await connect();
   console.log("listening on port 5000")
})



