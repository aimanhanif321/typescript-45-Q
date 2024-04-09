"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// / medium shirt with the default message, and a shirt of any size with a different
// message.
function makeShirt(size = "large", message = "i love Typescript") {
    console.log(`make ${size} t shirt and print ${message} on it.`);
}
makeShirt(); //default message
makeShirt("medium"); //large message
makeShirt(`small`, `"i love python"`); //small size
