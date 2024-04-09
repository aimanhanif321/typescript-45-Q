//QUESTION # 3

//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//lowercase 
let Name:string = "aiman khan";
console.log("Question # 3 is:\nlowercase:" , Name.toLocaleLowerCase());

//uppercase
console.log("uppercase:" , Name.toUpperCase());

//titlecase
console.log("title case:",Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase(),"\n");
