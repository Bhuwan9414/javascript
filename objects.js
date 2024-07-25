
// const mysym = Symbol("Key1");


// const JsUser = {
//     name:"Bhuwan",
//     "full name" : "Bhuwan suthar",
//     [mysym] : "mykey1",
//     age: 18,
//     location: "udaipur",
//     email: "sutharbhuwan2@gmail.com",
//     isLoggedIn: false
// }


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

// JsUser.email = "bhuwansuthar@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "gunnu@gmail.com"
// console.log(JsUser);


// const tinderuser = {}

// tinderuser.id = "27"
// tinderuser.name = "bhuwan"
// tinderuser.isLoggedIn = false

// console.log(tinderuser);


// nesting in objects :
 
// const regularuser = {
//     email : "sutharbhuwan2@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname : "bhuwan",
//             lastname : "suthar"
//         }

//     }
// }

// console.log(regularuser.fullname.userfullname.firstname.lastname);

// const target = {a: 1, b: 2};
// const source = {c: 5, d: 4};

// // const returntarget = Object.assign(target, source);

// // console.log(target); 

// const returntarget = {...target, ...source}

// console.log(returntarget);

// objects de-structure:

const course = {
    coursename : "js in hindi",
    price : "999",
    courseinstructor : "Bhuwan"
}

// console.log(course.courseinstructor);

const {courseinstructor : instructor} = course

console.log(instructor);

const {price} = course

console.log(price);