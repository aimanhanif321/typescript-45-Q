// // /QUESTION # 19
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.

let guestList:string[] = ["sharukh khan","salman khan","Amir khan"];
guestList.forEach(guestList => {
    console.log(`Dear Mr & Mrs ${guestList} \n it is our pleasure to invite you in our party \n Thank you\n`);
});

// print a message indicating the number of people you are inviting to dinner.
console.log(`i am inviting ${guestList.length} people for dinner`);
