// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple");
console.log(("Apple" as string) !== "Apple" );

// • Tests using the lower case function
console.log("lower case function test:", "APPLE".toLocaleLowerCase() === "apple");
console.log("lower case function test:", "APPLE".toLocaleLowerCase() !== "apple");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Equality test with number: 2 === 2 =" , 2 === 2);
console.log("Equality test with number:(2 as number) !== 2 =" , (2 as number) !== 2);
console.log("greater than test: 12 > 11 =",12 > 11 );
console.log("Less then test:12 < 11 =" , 12 < 11);
console.log("greater than equal to test:2 >= 8 =" , 2 >= 8);
console.log("Less than equal to test:2 <= 8 =" , 2 <= 8);

// • Tests using "and" and "or" operators
console.log("Tests using && : 6 === 6 && 7 > 6", 6 === 6 && 7 > 6);
console.log("Tests using && : 6 === 6 && 8 > 9",6 === 6 && 8 > 9);
console.log("Tests using && : 6 === 6 || 8 > 9",6 === 6 || 8 > 9);
console.log("Tests using && : 6 !== 6 || 8 > 9",6 !== 6 || 8 > 9);

// • Test whether an item is in a array
console.log("Test whether an item is in a array")
let arra = ["banana","kiwi","apple"];
console.log(arra.includes("kiwi"));

// • Test whether an item is not in a array
console.log("Test whether an item is not in a array")
console.log(arra.includes("mango"));
