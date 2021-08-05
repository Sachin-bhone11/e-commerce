var con=require('./mysqlconnect')
var OrderItems=function(details){
    this.itemname=details.itemname;
    this.quantity=details.quantity;

}
OrderItems.orderItems = async function (itemname, quantity,result) {

        let id = await findid(itemname);
        console.log(id);
        console.log(quantity);
        var orderitem = "insert into orderitems(itemid,quantity) values(?,?)"
      
            con.query(orderitem, [parseInt(id[0].itemid), parseInt(quantity)], (err) => {
                if (err) {
                   result(err);
                }
                else {
                   result("Order Items Select sucessfully")
                }
            })
      
    
    
    }
var findid = async function (itemname) {
    var itemid = "select itemid from item where itemname=?";
    let promise1 = new Promise((resolve, reject) => {
        con.query(itemid, [itemname], (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        })
    })
    let id = await promise1;
    return id;
}




module.exports=OrderItems;