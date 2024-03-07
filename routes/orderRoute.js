const express=require('express')
const router=express.Router()

router.post('/orders',async(req,res)=>{
    console.log(req.headers["access-token"],req.body)
    try{
        const dhanResp=await fetch("https://api.dhan.co/orders",{
            method:"POST",
            headers:{
                "access-token": req.headers["access-token"],
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body:JSON.stringify(req.body)
        })
        const dhanData=await dhanResp.json()
        res.json({
            data:dhanData,
            message:"Order placed successfully",
            success:true
        })
    }catch(err){
        res.status(500).json({
            data:null,
            message:err.message,
            success:false
        })
    }
    
})


module.exports=router