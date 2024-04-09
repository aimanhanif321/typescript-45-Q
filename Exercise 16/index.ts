// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.


// • Start with your program from Exercise 15
let guestList:string[] = ["sharukh khan","salman khan","Amir khan"];

guestList.forEach(guestList => {
    console.log(`Dear Mr & Mrs ${guestList} \n it is our pleasure to invite you in our party \n Thank you\n`);
});
// • Add one new guest to the beginning of your array.
guestList.unshift("Akshay kumar");

// • Add one new guest to the middle of your array.
guestList.splice(1,0,"Aiswariya");

// • Use append() to add one new guest to the end of your list.
guestList.push("Madhuri");

// • Print a new set of invitation messages, one for each person in your list.
guestList.forEach (guestList => {
    console.log(`Dear Mr & Mrs ${guestList} \n it is our pleasure to invite you in our party \n Thank you\n`)
})

// Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log("we just found a bigger dinner table, so now more space is available. ");
