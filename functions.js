// function sayMyName(){
//     console.log("bhuwan");
//     console.log("suthar");
// }

// sayMyName()

// adding two no using functions:

// function add(a, b){

//     console.log(a+b);

// }

// const result = add(5, 5);


// function add(a, b){

//     let result = a + b;
//     return result;

// }

// const result = add(5, 5);

// console.log("result :" , result);


// function loginusermessage(username){
//     return `${username} just logged in`
// }

// console.log(loginusermessage("Bhuwan"));


// USING OF REST OPERATOR:

// function calculatecartprice(...num1){
//     return num1
// }

// console.log(calculatecartprice(200, 400, 600))

// USING OBJECT WITH FUNCTIONS :

// const user = {
//     username :"Bhuwan",
//     price : 199
// }

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
// }

// handleObject(user)


const newArray = [200, 400, 600, 800]

function returnsecondvalue(getArray){
    return getArray[1];
}

console.log(returnsecondvalue(1));