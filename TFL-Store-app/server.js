
//server
//var con=require('./mysqlconnect.js')
var dal = require('./dal/dal.js')
const express = require("express");


var path = require("path");
var app = express();
app.listen(9000);
console.log("Listening on port no 9000");



app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));




//module.exports=app;
//router
app.get("/", (request, response) => {
    response.sendFile(__dirname + "index.html");
    response.end();
})

// app.get("/api/customers",  async (request, response) => {
//     console.log("Customer data");
//   var data= await dal.getAll();
//      response.send(data);
// })

// app.get("/api/customers/:id", (request, response) => {

//     let data =dal.getById(request.params.id);
//     response.send(data)
//     response.end();
// })

// app.delete("/api/customers/:id", (request, response) => {
//     dal.remove(request.params.id);
//     response.end();
// })

// app.post("/api/login",async (request, response) => {
//     //console.log("hello");
//     //console.log(request.body.username,request.body.password);;
//    var  result=await dal.verify(request.body.username,request.body.password);
//   // console.log(result);
//    if(result[0].res==1){
//        response.send("Valid");
//    }
//    else{
//        response.send("Invalid")
//    }
//     response.end();
// })


// // //app.post("/api/register", (request, response) => {
// //    var data= request.body
// // //console.log(request.body);
// //    // console.log(data.email);
// //     dal.insert(data);
// //     response.end();
// // })




// app.put("/api/customers/:id", (request, response) => {
//     var updateId = request.params.id;
//     dal.update(request.params.id);
// })

// app.get('/api/items',async(request,response)=>{
//     console.log("Item details");
//     let items=await dal.getItem();
//     response.send(items);
//     response.end();

// })
// app.get('/api/orders',async(request,response)=>{
//     console.log("Orders details");
//     let orders=await dal.getOrders();
//     response.send(orders);
//     response.end();

// })
// app.get('/api/orderitems',async(request,response)=>{
//     console.log("Order Item details");
//     let orderitems=await dal.getOrderItems();
//     response.send(orderitems);
//     response.end();

// })

// app.post('/api/orders',async(request,response)=>{
//     console.log("Taking orders")
//     let orders=await dal.createOrder(request.body.username);
//     response.send(orders);
//     console.log("orders");
//     response.end();
// })

// app.post('/api/orderitems',async(request,response)=>{
//     
// })

// app.post('/api/total',async(request,response)=>{
//     console.log("Total amount");
//     var total=await dal.process(request.body.orderid)
//     console.log(total);
//     response.end();
// })


var router=require('./router');
router(app);