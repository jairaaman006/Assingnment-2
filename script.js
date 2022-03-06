//4. Describe the below code.
console.log(typeof(1));
// number 
console.log(typeof(1.1));
// number
console.log(typeof('1.1'));
//string
console.log(typeof(true));
//boolean
console.log(typeof(null));
//object
console.log(typeof(undefined));
//undefined
console.log(typeof([]));
//object
console.log(typeof({}));
//object
console.log(typeof(NaN));
// number

//1. List 5 the difference between browserjs and nodejs?
// browserjs
// * In browser,it interacts with web platform API's like cookies.
// * Those do not exist in nodejs.
// * Compared to browser environment,you don't get a luxury to choose.
// * In browser,they are starting to see ES modules standard to being implemented.
// * There is no all nice API's like nodejs provides through module.

// Nodejs
// * In nodejs,you get the luxury to choose what browser your visitors will use.
// * This is very convinient.
// * You can write all the modern ES-6,7,etc javascript that your nodejs version supports.
// * You don't have the document,window and all the other objects that are provided by browser.
// * Nodejs supports both the commonjs and ES module systems.