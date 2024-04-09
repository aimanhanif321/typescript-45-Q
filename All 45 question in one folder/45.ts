//QUESTION # 2
// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
// would you like to learn some Python today?”


let personName: string = "ERIC";
console.log(`Question # 2 is:\n Hello ${personName} would you like some python today\n`);

//QUESTION # 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//lowercase 
let Name:string = "aiman khan";
console.log("Question # 3 is:\nlowercase:" , Name.toLocaleLowerCase());

//uppercase
console.log("uppercase:" , Name.toUpperCase());

//titlecase

console.log("title case:",Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase(),"\n");
 
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
// following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let famous_Quote:string = "Mother Terres";
console.log(`Question # 4 is:\n${famous_Quote} said "if you judge people you never have time to love them"`);


// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_Quote2:string = "Mother Terres";
let message1:string = "if you judge people you never have time to love them";
console.log(`Question # 5 is:\n${famous_Quote2} said ${message1}`);

// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after 
// striping the white spaces.

let PName:string = `       \n\tAiman khan\t\n           `;
console.log("Question # 6 is:\nbefore trim", PName);

let afterTrim:string = PName.trim();
console.log("After trim ",afterTrim,"\n");

//QUESTION # 7 and 8
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 
console.log("QUESTION # 7 & 8")
console.log('4 + 4 =' ,4 + 4);
console.log('18 - 10 =' ,18 - 10);
console.log('2 * 4 =' ,2 * 4);
console.log('16 / 2 =' ,16 / 2 , '\n');

//QUESTION # 9
//Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
//QUESTION # 10 Adding comments
let favorat_number = "5";
let message = (`my favorate number is: ${favorat_number}`);
console.log('Question # 9 is:')
console.log(message);

//QUESTION # 11 
//Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log('\nQuestion # 11 is:')
let names : string[] = [`Aiman`, `Haider`, `Alaya`,`Arif`];
for(let i = 0; i<names.length; i++){
    console.log(names[i]);
}
//QUESTION # 12
// Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
console.log('\nQuestion # 12 is:');
let names1: string[] = [`Aiman`,`Haider`,`Alaya`,`arif`];
let greeting:string = `, welcom to typescript class.`

for(let i = 0; i <names1.length; i++){
    console.log(names1[i] + greeting);
}
//Question 13: 
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
console.log("\nQUESTION # 13" );
let transport:string[] = ["car","motorcycle","train","bus"];
for(let i = 0; i < transport.length; i ++){
    console.log("I would like to own a "  +transport[i]);
}
//2nd method
let transports: string[] = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];

transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});
//Question 14: 
 /*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
//Question 15: 
/*Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite
 */
console.log("\nQUESTION # 14 & 15" );
let guestList:string[] = ["sharukh khan","salman khan","Amir khan"];
guestList.forEach(guestList => {
    console.log(`Dear Mr & Mrs ${guestList} \n it is our pleasure to invite you in our party \n Thank you\n`);
});
let absentGuest = "Amir khan";
let newGuest = "Amitabh Bachan";

//replace the guest
guestList[guestList.indexOf(absentGuest)] = newGuest;

//new invitation
guestList.forEach(guestList =>{
    console.log(`Dear Mr & Mrs ${guestList} \n it is our pleasure to invite you in our party \n Thank you\n`)
})
console.log(`${absentGuest} is not comming`);

//Question 16: 
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
console.log("\nQUESTION # 16" );
guestList.unshift("Akshay kumar");
guestList.splice(1,0,"Aiswariya");
guestList.push("Madhuri");

guestList.forEach (guestList => {
    console.log(`Dear Mr & Mrs ${guestList} \n it is our pleasure to invite you in our party \n Thank you\n`)
})
console.log("we just found a bigger dinner table, so now more space is available. ");

//Question 17: 
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
console.log("\nQUESTION # 17" );
console.log("sorry i can invite only two people for dinner");
//remove guest using while loop
while(guestList.length > 2){
   let remainingGuest = guestList.pop();
   console.log(`sorry Mr ${remainingGuest} you are not invited`);
}
//send invitation for remaining guest
guestList.forEach(guestList => {
    console.log(`Mr ${guestList} you are still invited for dinner`);
})
//remove last two guest
guestList.splice(0,2);
console.log(guestList);

//Question 18: 
//. Seeing the World: Think of at least five places in the world you’d like to visit.
console.log("\nQUESTION # 18" );

// •1 Store the locations in a array. Make sure the array is not in alphabetical order.d
let places:string[] = ["London","Paris","New york","America","France"];
//2• Print your array in alphabetical order without modifying the actual list.
console.log(`original order`, places);

//3•Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order",[...places].sort());

//4•Show that your array is still in its original order by printing it.
console.log(` original order`,places);

//5•Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order",[...places].sort().reverse());

//6•Show that your array is still in its original order by printing it again.
console.log(` original order`, places);

// 7• Reverse the order of your list. Print the array to show that its order has changed.
console.log("original reverse alphabrtical order",places.reverse());

//•8 Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("original reverse alphabrtical order again",places.reverse());

//9•Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("original  alphabrtical order",places.sort());

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse alphabetical order:", places.reverse());

//QUESTION # 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("\nquestion # 19");
let guest_List:string[] = ["sharukh khan","salman khan","Amir khan"];
console.log(`i am inviting ${guest_List.length} people for dinner`);

//QUESTION # 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
console.log("\nquestion # 20");
let languages:string[] = ["Urdu","Hindi","English","Arbi"];
for(let i = 0; i < languages.length; i++){
console.log(languages[i]);
};
//QUESTION # 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log("\nquestion # 21");
let intro: {
    name:string,
    age:number,
    profession:string
} =
   {
    name:"Aiman khan",
    age:26,
    profession:"web developer"
   }
   console.log(`my name is ${intro.name} i am ${intro.age} and my profession is ${intro.profession}.`);

//QUESTION # 22
console.log("\nquestion # 22");
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let array:string[] = ["pakistan","india","france"];
    console.log(`error`,array[4]);
    console.log(`correct the error`,array[0]);

//QUESTION # 23
console.log("\nquestion # 23");
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let a:number = 5;
let b:number = 3;
let sum:number = a + b;
//1st condition:
console.log("is a === b? I predict false");
console.log(a === b);
//2nd condition:
console.log("is a === a? I predict true");
console.log(a === a);
//3rd condition:
console.log("is b === a? I predict false");
console.log(b === a);
//4th condition:
console.log("is b === b? I predict true");
console.log(b === b);
//5th condition:
console.log("is sum === 5 ? I predict false");
console.log(sum === 5);
//6th condition:
console.log("is sum === 8 ? I predict true");
console.log(sum === 8);
//7th condition:
console.log("is sum === a ? I predict false");
console.log(sum === a);
//8th condition:
console.log("is sum === a + b ? I predict true");
console.log(sum === a + b);
//9th condition:
console.log("is b === a + b ? I predict false");
console.log(b === a + b);
//10th condition:
console.log("is a + b === a + b ? I predict true");
console.log(a + b === a + b);


// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
console.log(`\n QUESTION 24`)
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

//QUESTION # 25
console.log("\n QUESTION # 25 ");
// Write an if statement to test whether the alien’s color is green.

let Alein_colour:string = "green";

//print a message that the player just earned 5 points.

if(Alein_colour === "green"){
    console.log("you just earned 5 points");
}
// Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)

Alein_colour = "Red";

if(Alein_colour === "green"){
    console.log("you just earned 5 points");
}

//QUESTION # 26
console.log("\n QUESTION # 26 ");

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let alien1 = "green";

 if(alien1 === "green"){
    console.log("you just earned 5 points for shooting the alien");

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

 }else{
    console.log("you just earned 10 points!");
 }
// • Write one version of this program that runs the if block and another that runs the else block.

alien1 = "red";
if(alien1 === "green"){
    console.log("you just earned 5 points for shooting the alien")
 }else{
    console.log("you just earned 10 points!")
 }

//  27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//QUESTION # 27
console.log("\n QUESTION # 27 ");
//first version
let alien2 = "green";
 if(alien2 === "green"){
    console.log("you just earned 5 points for shooting the alien");
 }
 else if(alien2 === "yellow"){
    console.log("you just earned 10 points for shooting the alien");
 }
 else if(alien2 === "red"){
    console.log("you just earned 15 points for shooting the alien");
 }
//second version
 alien2 = "yellow";
 if(alien2 === "green"){
    console.log("you just earned 5 points for shooting the alien");
 }
 else if(alien2 === "yellow"){
    console.log("you just earned 10 points for shooting the alien");
 }
 else if(alien2 === "red"){
    console.log("you just earned 15 points for shooting the alien");
 }
//third version
  alien2 = "red";
 if(alien2 === "green"){
    console.log("you just earned 5 points for shooting the alien");
 }
 else if(alien2 === "yellow"){
    console.log("you just earned 10 points for shooting the alien");
 }
 else if(alien2 === "red"){
    console.log("you just earned 15 points for shooting the alien");
 }

//  /QUESTION # 28
console.log("\n QUESTION # 28 ");
//  28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age = 30;
// • If the person is less than 2 years old, print a message that the person is a baby.
if(age < 2){
    console.log("you are a baby.");
    // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
}else if(age < 4){
    console.log("you are a todddler.");
    // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
}else if(age < 13){
    console.log("you are a kid.");
    // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
}else if(age < 20){
    console.log("you are a teenager.");
    // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
}else if(age < 65){
    console.log("you are an adult.");
    // • If the person is age 65 or older, print a message that the person is an elder.
}else{
    console.log("you are a elder.");
}

// /QUESTION # 29
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
console.log("\n QUESTION # 29 ");
let favorite_fruits:string[] = ["apple","mango","banana"];

if(favorite_fruits.includes("apple")){
    console.log("I really like apple.");
}
if(favorite_fruits.includes("mango")){
    console.log("I really like mango.");
}
if(favorite_fruits.includes("kiwi")){
    console.log("I really like kiwi.");
}
if(favorite_fruits.includes("orange")){
    console.log("I really like orange.");
}
if(favorite_fruits.includes("banana")){
    console.log("I really like banana.");
}

// /QUESTION # 30
console.log("\n QUESTION # 30");
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:

let username:string[] = ["Alina","Ahmed","Admin","Ali","Rana"];

for(let i = 0; i < username.length; i ++){
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
    if(username[i] === "Admin"){
        console.log(`Hello admin would you like to see a status report`);
        
// • Otherwise, print a generic greeting, such as 
    }else{
        console.log(`Hello ${username[i]} thank you for loging again`);
    }
}
// 31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// /QUESTION # 31
console.log("\n QUESTION # 31");


// • If the list is empty, print the message We need to find some users!
if(username.length === 0){
    console.log(`we need to find some users!`);
    // • Remove all of the usernames from your array, and make sure the correct message is printed.
}else{
    username = [];
    console.log(`remove all users name`);
}

// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// /QUESTION # 32
console.log("\n QUESTION # 32");


let current_users: string[] = ["user1", "user2", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "user2", "User8"];

new_users.forEach(newuser => {
    if(current_users.some(curentuser => curentuser.toLocaleLowerCase() === newuser.toLowerCase())){
        console.log(`${newuser} will need to enter a new user name`);
    }else{
        console.log(`${newuser} is availble`);
    }
});

// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// /QUESTION # 33
console.log("\n QUESTION # 33");
// • Store the numbers 1 through 9 in a array.
let numbers:number[] = [1,2,3,4,5,6,7,8,9];

// • Loop through the array.
for(let num of numbers){
   let ordinalEnding: string;

  // Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 9th", and each result should be on a separate line.
   if(num === 1){
     ordinalEnding = "st";

   } else if(num === 2){
    ordinalEnding = "nd";

   }else if(num === 3){
    ordinalEnding = "rd";

   }else{
    ordinalEnding = "th";
   }
   console.log(`${num}${ordinalEnding}`)
}
// QUESTION # 34
console.log("\n QUESTION # 34");
// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
let pizzas:string[] = ["chicken tikka", "fajita ","pepproni"];

// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
pizzas.forEach(pizza => {
    console.log(`I like${pizza} pizza`);
})
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
console.log(`I really love pizza`);


// QUESTION # 35
console.log("\n QUESTION # 35");
// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
let Animals:string[] = ["Dog", "Cat","Rabbit"];

// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
Animals.forEach(Animal => {
    console.log(`A ${Animal} would make a great pet.`);
})
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
console.log(`Any of these animals would make a great pet.`);


// QUESTION # 36
console.log("\n QUESTION # 36");
// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

function make_shirt(size:string , message:string) {
   console.log(`make ${size} t shirt and print ${message} on it.`);
}
make_shirt(`medium`,`"I love coding"`);

// QUESTION # 37
console.log("\n QUESTION # 37");
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// / medium shirt with the default message, and a shirt of any size with a different
// message.

function makeShirt(size: string = "large", message: string = "i love Typescript"){
    console.log(`make ${size} t shirt and print ${message} on it.`);
}
makeShirt();//default message
makeShirt("medium");//large message
makeShirt(`small`,`i love python`);//small size

// QUESTION # 38
console.log("\n QUESTION # 38");

// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.

function describe_city(city:string = `karachi`, country: string = "Pakistan"){
    console.log(`${city} is in ${country}.`)
}
// / Call your function for three different cities, at least one of which is not in the
// default country.
describe_city();
describe_city(`islamabad`);
describe_city(`lahore`);

// QUESTION # 39
console.log("\n QUESTION # 39");

// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
function city_country(city:string , country:string){
    return `${city},${country}`;
}
//Call your function with at least three city-country pairs, and print the value
// that’s returned.

console.log(city_country(`karachi`,`pakistan`));
console.log(city_country(`Islamabad`,`pakistan`));
console.log(city_country(`Lahore`,`pakistan`));

// / QUESTION # 40
console.log("\n QUESTION # 40");

// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.

function make_album(artist: string , title: string , tracks?:number)
{
    let album:{
        artist: string ,
        title: string ,
        tracks?:number}
          
          = {
       
         artist: artist,
         title: title,
    } 
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));

// QUESTION # 41
console.log("\n QUESTION # 41");

// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
 
let magicians:string[] = ["magician1","magician2","magician3","magician4"]

function show_magicians(magicians: string[]) {
    magicians.forEach(magician =>{
        console.log(`${magician}`);
    })
    
} show_magicians(magicians);


// QUESTION # 42
console.log("\n QUESTION # 42");
// 42. Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
function make_great(magicians: string[]){
    magicians.forEach(magician => {
        console.log(`The Great ${magician}`);
    })
}make_great(magicians);
show_magicians(magicians);


// QUESTION # 43
console.log("\n QUESTION # 43");
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

// //start with exercise 41 i have change the arrray and function name because of Duplicate function implementation.
let magician1:string[] = ["magician1","magician2","magician3","magician4"];
function copyArry(arr:string[]){
    return [...arr];
}

function show_magicians1(magicians: string[]) {
    magicians.forEach(magician =>{
        console.log(`${magician}`);
    })
    
}

function make_great1(magicians: string[]){
    magicians.forEach(magician => {
        console.log(`The Great ${magician}`);
    })
}
const  copymagicianArr = copyArry(magician1);

console.log(`this is my original array`)
make_great1(copymagicianArr);
console.log(`this is my modified array`)
show_magicians1(magician1);


console.log("\n QUESTION # 44");

// Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich.
function make_sandwich(items:string[]){
    console.log(`Make sandwitch with my favorate ingrediants:`)

 // the function should have one parameter that collects as many
// items 
    items.forEach(ingrediants =>
        console.log(`- ${ingrediants}`))
}
// Call the function three times, using a different number
// of arguments each time.
make_sandwich([`cheese`,`mayo`,`bacon`]);
make_sandwich([`cheese`,`ketchup`,`perry sause`]);
make_sandwich([`garlic mayo`,`alpeno`,`bacon`]);

// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.

// / QUESTION # 45
console.log("\n QUESTION # 45");

function carInformation(manufacturer: string , model : number, ...option :{[key :string] : any } [] ): object {

    const carInfo = {
          manufacturer,
          model,
          ...Object.assign({}, ...option)

    }
    return carInfo;
}

let information = carInformation(`toyota`, 2022,{color:`white`}, {features:[`fast speed`,`power window`]});
console.log(information);