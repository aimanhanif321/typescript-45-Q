//Question 14: 

 /*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/

let guestList:string[] = ["sharukh khan","salman khan","Amir khan"];

guestList.forEach(guestList => {
    console.log(`\nDear Mr & Mrs ${guestList} \n it is our pleasure to invite you in our party \n Thank you\n`);
})