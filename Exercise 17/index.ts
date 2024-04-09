// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.


// • Start with your program from Exercise 16.
let guestList:string[] = ["sharukh khan","salman khan","Amir khan"];
guestList.forEach(guestList => {
    console.log(`Dear Mr & Mrs ${guestList} \n it is our pleasure to invite you in our party \n Thank you\n`);
});

guestList.unshift("Akshay kumar");
guestList.splice(1,0,"Aiswariya");
guestList.push("Madhuri");

// Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("sorry i can invite only two people for dinner");

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
while(guestList.length > 2){
   let remainingGuest = guestList.pop();
   console.log(`sorry Mr ${remainingGuest} you are not invited`);
}

// • Print a message to each of the two people still on your list, letting them know they’re still invited.
guestList.forEach(guestList => {
    console.log(`Mr ${guestList} you are still invited for dinner`);
})

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
guestList.splice(0,2);
console.log(guestList);
