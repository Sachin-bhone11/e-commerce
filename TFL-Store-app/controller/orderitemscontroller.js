var orderitems=require('../dal/orderitems');
exports.addItems=function(request,response){
    console.log("Taking orders")
    console.log(request.body.itemname,request.body.quantity)
   orderitems.orderItems(request.body.itemname,request.body.quantity,(err,details)=>{
            if(err){
                response.send(err);
            }
            else{
                response.send("Item Added");
            }
   });
   
}
