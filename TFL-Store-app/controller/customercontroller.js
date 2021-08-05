var customer = require('../dal/customerdal');
exports.createCustomer = function (req, res) {


    customer.insertdetails(req.body, function (err, customer) {
        if (err)
            res.send(err);
        res.json(customer);
    });

}


exports.customerDetails = function (req, res) {
    customer.getAll(function (err, details) {
                if(err){
                    res.send(err);
                }
                else{
                    res.send(details);
                }
    })
}
exports.customerUpdate=function(req,res){
    customer.update(req.params.user,function(err,details){
                    if(err){
                        res.send(err)
                    }
                    else{
                        res.send("Updated Sucessfully")
                    }
    })
}

exports.customerRemove=function(req,res){
    customer.remove(req.params.user,function(err,details){
                    if(err){
                        res.send(err)
                    }
                    else{
                        res.send("Deleted Sucessfully")
                    }
    })
}

exports.customerDetailByName=function(req,res){
    customer.getByName(req.params.user,function(err,details){
                if(err){
                    res.send(err);
                }
                else{
                    res.json(details);
                }
    })
}


