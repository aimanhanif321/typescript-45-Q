// Name: Aiman Khan
//Date:2.April.2024

// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
// If you don’t have anything specific to write because your programs are too simple at this point,
//  just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.

// first program

//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//lowercase 
let Name:string = "aiman khan";
console.log("Question # 3 is:\nlowercase:" , Name.toLocaleLowerCase());

//uppercase
console.log("uppercase:" , Name.toUpperCase());

//titlecase

console.log("title case:",Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase(),"\n");
 

// second program

// first store a personname in variable
let personName: string = "ERIC"

// then console it using the "template literal".
console.log(`\n Hello ${personName} would you like some python today\n`);
