let Showroom = "Bullet"
let bike = {
    [Showroom]:"is blackish",    //computed propertise 
    //name:"bullet",
    engine:"600cc",
    wheel:2,
    ["bike colour"]:"red", //for multiple word it is in double quote 
}

console.log(bike.Bullet);
console.log(bike.wheel);   //get the property 
console.log(bike["bike colour"]); // get that multiple word properties 
