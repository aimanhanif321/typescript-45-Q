//Question 15: 

/*Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite
*/

// • Start with your program from Exercise 14.
let guestList:string[] = ["sharukh khan","salman khan","Amir khan"];

guestList.forEach(guestList => {
    console.log(`Dear Mr & Mrs ${guestList} \n it is our pleasure to invite you in our party \n Thank you\n`);
});
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

let absentGuest = "Amir khan";
let newGuest = "Amitabh Bachan";

//replace the guest
guestList[guestList.indexOf(absentGuest)] = newGuest;

// • Print a second set of invitation messages, one for each person who is still in your list.
console.log(`new invitations\n`)
guestList.forEach(guestList =>{
    console.log(`Dear Mr & Mrs ${guestList} \n it is our pleasure to invite you in our party \n Thank you\n`)
})
// Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(`${absentGuest} is not comming`);
