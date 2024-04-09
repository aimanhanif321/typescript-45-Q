"use strict";
//Question 18: 
//. Seeing the World: Think of at least five places in the world you’d like to visit.
console.log("\nQUESTION # 18");
// •1 Store the locations in a array. Make sure the array is not in alphabetical order.d
let places = ["London", "Paris", "New york", "America", "France"];
//2• Print your array in alphabetical order without modifying the actual list.
console.log(`\noriginal order \n`, places);
//3•Print your array in alphabetical order without modifying the actual list.
console.log("\nAlphabetical order \n", [...places].sort());
//4•Show that your array is still in its original order by printing it.
console.log(`\n original order \n`, places);
//5•Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nreverse alphabetical order \n", [...places].sort().reverse());
//6•Show that your array is still in its original order by printing it again.
console.log(`\n original order \n`, places);
// 7• Reverse the order of your list. Print the array to show that its order has changed.
console.log("\noriginal reverse alphabrtical order \n", places.reverse());
//•8 Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\noriginal reverse alphabrtical order again \n", places.reverse());
//9•Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\noriginal  alphabrtical order \n", places.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nReverse alphabetical order:\n", places.reverse());
