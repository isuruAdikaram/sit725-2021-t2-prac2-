var express = require("express");
var app = express();

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended:false}));





const addNumbers =(number1,number2)=>{
    var num1 =parseInt(number1);
    var num2 =parseInt(number2);
    
    if(isNaN(num1)||isNaN(num2)){
        return false;

    }else{
        var sum = num1+num2;
    }
    return sum;

}

app.get("/addTwoNumbers",(req,res)=>{
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = addNumbers(number1,number2);
    res.json({statusCode:200, data: result, number1 : parseInt(number1), number2 : parseInt(number2), message:"success"});

});

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("My application has started "+port);
});