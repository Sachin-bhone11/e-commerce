const e = require('express');
const Orders = require('../dal/ordersdal');
//var orders=require('../dal/ordersdal');

exports.itemDetails=function(req,res){
    Orders.getItem(function(err,details){
        if(err){
            res.send(err);
        }
        else{
            res.send(details);
        }
    })
}

exports.orderCreate=function(req,res){
    Orders.createOrder(req.params.user,function(err,details){
        if(err){
            res.send(err);
        }
        else{
            res.send("Taking order")
        }
    })
}



exports.bill=function(request,response){
    console.log(request.params.id);
 Orders.billupdate(request.params.id,(err,result)=>{
           
if(err){
    response.send(err)
}
                response.send(result)
            
 })
}

exports.cancel=function(request,response){
    console.log(request.params.id);
    Orders.remove(request.params.id,(err,result)=>{
        if(err){
            response.send(err)
        }
        else{
            response.send(result);
        }
    })
}