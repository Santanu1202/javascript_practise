// Function Declaration
function addition(a,b){
    return a+b
}
console.log(addition(2,3))
// Function Expression but not Anonymous function
var add = function hi(a,b){
    return a+b
}
console.log(add(1,2))
// Function Expression but Anonymous function
var add = function(a,b){  //<-- this function itself Anonymous function
    return a+b
}
console.log(add(1,2))

var factorial = function fact(n) {
    if (n === 1) {
        return 1;
    }

    return n * fact(n - 1);
};

console.log(factorial(5));


