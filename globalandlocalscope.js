// accessing of variables : 



// let a = 300;   // this is global scope


// if(true){

//     let a = 10;     //  local scope
//     const b = 20;    // bound in this scope only and cannot be used outside of this scope
   
//     // console.log("INNER : ", a);

// }

// console.log(a);   // error becoz it is outside the scope
// console.log(b);      // error becoz it is outside the scope
// console.log(c);        // didnt got the error becoz var can be used outside the scope 

        // (we don't usually use var in js)

        // console.log(a);


// function one(){
//     const username = "Bhuwan"

//     function two(){
//         const website = "youtube"
//         console.log(username);
    // }
    // console.log(website);   didnt execute bcoz it is outside the scope.

//     two()
// }

// one()

if(true){
    const username = "Bhuwan"
    if(username === "Bhuwan"){
        const website = " youtube"
        console.log(username  +  website);
    }
    // console.log(website);
}

// console.log(username);