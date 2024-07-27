const mysql = require("mysql");
const express = require("express")
const app = express();
const connection=mysql.createConnection({
host:"localhost",
user:"root",
password:"Strongpassword75",
database:"employee_dashboard"});

connection.connect(function(error){
    if (error) throw error
    else console.log("connected to the database succesfully!")
})
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})


app.listen(3000);