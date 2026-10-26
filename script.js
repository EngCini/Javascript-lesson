// // console.log("Hello, world!")

// // let firstname = "Cini";

// // const id = "0943574";

// // // 3 different use cases of var

// // // functions

// // function button (){
// //     let t
// //     return
// // }

// // const functionName = () => {

// // }

// // alert("displays messages")
// // prompt("asks for an input")
// // console.log("help in debugging by printing to the terminal")

// // const button = document.getElementById("greetButton")

// // button.addEventListener("onclick", function (){
// //     alert("Hello, Welcome to my page")
// // })
// let burgers = 3;

// let deliveryFee = 250;

// function totalPrice (burgersCount, fee){
//     const total = burgersCount * 750;
//     const subTotal = total + fee;
//     return { total, subTotal};
// }

// console.log(totalPrice(burgers, deliveryFee));

// Program flow - functions

// function greet(){
//     console.log("Welcome to my world!")
// }

// function greetUser(name){
//     console.log(`Welcome to my world, ${name}!`)
// }

// greetUser("Cini");

// function countDown(){
//     console.log(3, 2, 1, "go!")
// }
// countDown();

// function addNumbers(a, b){
//     console.log(a + b);
// }
// addNumbers(5, 5);

// function calculateTotal(price, quantity){
//     return price * quantity
// }
// const total = calculateTotal(500, 3)

// console.log(`Hello Your total is ${total}`)

// conditional statement is a statement that allows the program to make a decision based on whether the condition is true or false
// const balance = 200

// if (balance >= 1000){
//     console.log("You can make this order")
// } else{
//     console.log(`Oops! Your balance is ${balance}, top up to make purchase`)
// }

// const position = 6

// if(position === 1){
//     console.log("you receive 10k")
// } else if(position > 1 && position <= 5){
//     console.log("toys")
// } else if(position >= 6){
//     console.log("You need to pull up your socks")
// } else {
//     console.log("We need to see the teacher")
// }

// const steps = 345958;

// if(steps >= 6000){
//     console.log("Congrats! You've reached your goal today")
// } else if(steps >= 5000 && steps < 6000){
//     console.log("Good, but you can do better")
// } else if(steps < 5000){
//     console.log("Get those steps in!")
// } else{
//     console.log("Check your steps again")
// }

// const dishesWashed = 145;

// function priceByDishes (dishesWashed){

// switch(true){
//     case (dishesWashed > 0 && dishesWashed <= 50):
//     return "Your payment is sh.100";

//     case(dishesWashed > 50 && dishesWashed <= 100):
//     return "Your payment is sh.150";

//     case(dishesWashed > 100 && dishesWashed <= 150):
//     return "Your payment is sh.200";

//     case(dishesWashed > 150 && dishesWashed <= 200):
//     return "Your payment is sh.250";

//     case(dishesWashed > 200 && dishesWashed <= 250):
//     return "Your payment is sh.300";

//     case(dishesWashed > 250 && dishesWashed <= 300):
//     return "Your payment is sh.350";

//     case(dishesWashed > 300 && dishesWashed <= 350):
//     return "Your payment is sh.400";

//     case(dishesWashed > 350 && dishesWashed <= 400):
//     return "Your payment is sh.450";

//     case(dishesWashed > 400 && dishesWashed <= 450):
//     return "Your payment is sh.500";

//     case(dishesWashed > 450 && dishesWashed <= 500):
//     return "Your payment is sh.550";

//     default:{
//         return "Your payment is sh.0";
//     }
// }
// }

// console.log(priceByDishes(239));

let text = "Visit W3Schools!";
let n = text.match(/W3Schools/);
document.getElementById("demo").innerHTML = n;
