//QUESTION # 11 
//Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.


// forEach function

let friends_Name : string[] = [`Aiman`, `Haider`, `Alaya`,`Arif`];

friends_Name.forEach(names => {

    console.log(names);
});

//  for loop method

let name1 : string[] = [`Aiman`, `Haider`, `Alaya`,`Arif`];

for(let i = 0; i<name1.length; i++){
    
    console.log(name1[i]);
}