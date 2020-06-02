const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.status("200").json({
        success: true,
        data:{
            message: "Yay it is working"
        }
    })
})

app.listen(9900,()=> console.log(`Server started in port 9900`))