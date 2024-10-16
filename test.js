let num=33;
let str="Hello";

// let sum=num+str;
// console.log(sum); // 33Hello

//write a function that takes two arguments and returns the sum of them
function sum(a,b){
    return a+b;
}
console.log(sum(2,3)); // 5

//two arrow functions and assign them to a variable
// let sum=(a,b)=>a+b;
let sub=(a,b)=>a-b;

//write a function that takes a string and returns the length of it
function length(str){
    return str.length;
}
//string array
let arr=["apple","banana","orange"];
//object with 10 jokes
let jokes={
    joke1:"Why did the scarecrow win an award?",
    joke2:"Why was the math book sad?",
    joke3:"Why did the tomato turn red?",
    joke4:"Why did the tomato turn red?",
    joke5:"Why did the tomato turn red?",
    joke6:"Why did the tomato turn red?",
    joke7:"Why did the tomato turn red?",
    joke8:"Why did the tomato turn red?",
    joke9:"Why did the tomato turn red?",
    joke10:"Why did the tomato turn red?"

}
// //jokes array with key value pairs
// let jokes=[
//     {joke1:"Why did the scarecrow win an award?"},
//     {joke2:"Why was the math book sad?"},
//     {joke3:"Why did the tomato turn red?"},
//     {joke4:"Why did the tomato turn red?"},
//     {joke5:"Why did the tomato turn red?"},
//     {joke6:"Why did the tomato turn red?"},
//     {joke7:"Why did the tomato turn red?"},
//     {joke8:"Why did the tomato turn red?"},
//     {joke9:"Why did the tomato turn red?"},
//     {joke10:"Why did the tomato turn red?"}
// ]
//all dom elements
let h1=document.querySelector("h1");
let p=document.querySelector("p");
let div=document.querySelector("div");
let ul=document.querySelector("ul");
let li=document.querySelector("li");
let img=document.querySelector("img");
let a=document.querySelector("a");
let button=document.querySelector("button");
let input=document.querySelector("input");
//arrow function with callback
// const sum=(a,b,callback)=>{
//     return callback(a+b);
// }
// console.log(sum(2,3,(result)=>result*2)); // 10

// function sum(a,b,callback){
//     return callback(a+b);
// }

//rectangle
let loop=5;
let string=""
// for(let i=0;i<loop;i++){
//     for(let j=0;j<loop;j++){
//         string=string+'*'
//     }
// string+="\n"
// }
// console.log(string);

//hollow rectangle
// for(let i=0;i<loop;i++){
//     for(let j=0;j<loop;j++){
//         if(i==0 || i==loop-1)string=string+'*';
//         if(j==0 || j==loop-1)string=string+'*';
//         else string=string+''
//     }
// string+="\n"
// }
// console.log(string);

//right triangle
for(let i=0;i<loop;i++){
    for(let j=0;j<loop;j++){
    }
     string=string+'*'
string+="\n"
}
console.log(string);
