const product1 = {
        name :'BASKETBALL ' ,
        price : 300,
        'delivery-time' : '3 days', 
    };
    const product2 = {
        name :'Basketball' ,
        price : 200,
        'delivery-time' : '3 days', 
    };

console.log(product1,product2);
console.log(product1.name  .repeat(2));


comparePrice ();
const results = isSameProduct(product1,product2);
console.log(results);
console.log()

function comparePrice() {
    if (product1.price > product2.price) {
const {price} = product2;
        console.log(price);
    }
    else {
        const {price} = product1;
        console.log(price);
    }       
}

function isSameProduct(product1, product2){
    
    if (product1.price === product2.price && product1.name === product2.name){
        return true;
    }
        else {
        return false;
    }

}