
module.exports = function cart(oldCart){
    this.items = oldCart.items || 0;
    this.totalqty = oldCart.totalqty || 0;
    this.totalprice = oldCart.totalprice || 0;


    this.add = function(item, id){

        var storedItem = this.items[id];

        if(!storedItem){
            storedItem=this.items[id] = {item:item,qty:0,price:0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalqty++;
        this.totalprice+= storedItem.item.price;
    };

    this.generateArray =  function() {
        var arr = [];

        for(var id in this.items){
            arr.push(this.items[id]);
        }
        return arr;
    };
};