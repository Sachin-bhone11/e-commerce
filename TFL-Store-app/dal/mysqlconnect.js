
//mysql

var mysql=require('mysql');

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root123',
    database:'e_commerce'
});


//dal
connection.connect(function(err){
    if(err){
        console.log(err);
        //throw err;
    }
});
module.exports=connection;