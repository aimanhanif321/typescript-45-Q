"use strict";
//QUESTION # 12
// Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
let friends_Name = [`Aiman`, `Haider`, `Alaya`, `arif`];
let greeting = `, welcom to typescript class.`;
// for(let i = 0; i <friends_Name.length; i++){
//     console.log(friends_Name[i] + greeting);
// }
friends_Name.forEach(friends => {
    console.log(`${friends} ${greeting}`);
});
