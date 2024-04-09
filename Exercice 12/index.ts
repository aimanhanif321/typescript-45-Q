//QUESTION # 12

// Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.


let friends_Name: string[] = [`Aiman`,`Haider`,`Alaya`,`arif`];

let greeting:string = `, welcom to typescript class`

friends_Name.forEach(friends =>{
    console.log(`${friends} ${greeting}`);
});
