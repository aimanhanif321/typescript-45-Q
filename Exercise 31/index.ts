// 31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// /QUESTION # 31
let username:string[] = ["Alina","Ahmed","Admin","Ali","Rana"];


// • If the list is empty, print the message We need to find some users!
if(username.length === 0){
    console.log(`we need to find some users!`);
   
 // • Remove all of the usernames from your array, and make sure the correct message is printed.
}else{
    username = [];
    console.log(`All usersname have been removed ${username.length}`);
}