var connection=require('./mysqlconnect');


var Customer=function(customerdetails){
    this.firstname=customerdetails.firstname;
    this.lastname=customerdetails.lastname;
    this.email=customerdetails.email;
    this.password=customerdetails.password;
    this.contactno=customerdetails.contact;
    this.user=customerdetails.user;
}

Customer.insertdetails=function(data,result){
    var insert="insert into customers(firstname,lastname,email,password,contactno,user) values(?)"
  
   console.log(data);
    connection.query(insert, [data], (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            console.log(res.insertId);
            result(null, res.insertId);
          }
    })
}


Customer.getAll = function (res) {
    var select = 'select * from customers';
  
        connection.query(select,  (err, data) => {
            if (err) {
                res(err,null);
            }
            else {

                res(null,data)

            }
        })
}

Customer.update = function (username,result) {
    var updateCustomer = "update customers set firstname='Sachin'  where user='"+username+"'";
    connection.query(updateCustomer, (err) => {
        if (err) {
            result(err,null);
        }
        result(null,"Updated Sucesfully")
    })
}

Customer.remove = function (username,result) {
    console.log(username);
    var rmvCustomer = "delete from customers where user='" + username+"'";
    connection.query(rmvCustomer, (err,details) => {
        if (err) {
            result(err,null);
        }else{
            result(null,"Deleted")
        }
    })
}


Customer.getByName = function (username,result) {
    var getId = "select * from customers where user='" + username+"'";
   
        connection.query(getId, (err, data) => {
            if (err) {
              result(err,null);
            }
            else {
                result(null,data);
            }
            
        })
        
   
    
}

module.exports=Customer;