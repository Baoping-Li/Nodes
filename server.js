"use strict";
const express=require('express');
let app=express();
app.get('/', (req, res)=>{
  res.setHeader('Content-type', 'text/plain');
  res.send("hello world");
})

app.listen(8080, ()=>{
  console.log('Server running on port 8080.');
});