var express=require('express')
 
var router=express.Router();
 
router.get('/',(req,res)=>{
    let ran=Math.floor(Math.random()*100)+1;
    let data=req.query.x;
    console.log(data,ran);
    res.send('Math.imul('+ran+') is:'+Math.imul(ran)+'Math.log('+ran+') is:'+Math.log(ran)+'Math.log10('+ran+') is:'+Math.log10(ran)+
    'Math.trunc('+ran+') is:'+Math.trunc(ran)

    );
})
 
module.exports=router