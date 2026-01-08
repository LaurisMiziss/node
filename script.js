// // const script2 = require('./script2.js')
// import { largeNumber } from './script2.js';

// const a = largeNumber;
// const b = 7;

// setTimeout(() => {
//     console.log(a + b);
// }, 1000);

// // globalThis === window; // true in browsers

// // top level await
// const response = await fetch("https://swapi.info/api/starships");
// const data = await response.json();
// console.log(data);

// // Solve the below problems:

// // #1) Convert the below async function to remove the async keyword
//   const response2 = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data2 = await response2.json();
//   console.log(data2);



// // #2) ADVANCED: Remove the async function from the below wherever possible:
// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];

// const [users, posts, albums] = await Promise.all(
//     urls.map((url) => fetch(url).then((resp) => resp.json())),
// );

// console.log("users", users);
// console.log("posta", posts);
// console.log("albums", albums);


// // #3  ADVANCED: Try to run this piece of code just as a JS file not inside the browser dev tool, instea using this:
// //https://glot.io/new/javascript
// const response3 = await fetch("https://jsonplaceholder.typicode.com/users");
// const data3 = await response3.json();
// console.log(data3);
// //!! It will actually give you an error: "await is only valid in async functions and the top level bodies of modules"
// //WHY?

// fs is file system module built-in to Node.js
// const r = require('fs').readFileSync('script2.js', 'utf8');
// console.log(r);