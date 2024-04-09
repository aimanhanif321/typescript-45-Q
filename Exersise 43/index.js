"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
let magician = ["magician1", "magician2", "magician3", "magician4"];
function copyArry(arr) {
    return [...arr];
}
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(`${magician}`);
    });
}
function make_great(magicians) {
    magicians.forEach(magician => {
        console.log(`The Great ${magician}`);
    });
}
const copymagicianArr = copyArry(magician);
console.log(`this is my original array`);
make_great(copymagicianArr);
console.log(`this is my modified array`);
show_magicians(magician);
