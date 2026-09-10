const express = require("express");
const app = express();

app.get("/api/health",(req,res)=>{
    res.send("I am starting");
});
module.exports = app;
