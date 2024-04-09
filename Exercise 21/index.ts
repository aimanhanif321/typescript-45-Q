//QUESTION # 21

//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let intro: {
  name: string;
  age: number;
  profession: string;
} = {
  name: "Aiman khan",
  age: 26,
  profession: "web developer",
};
console.log(
  `my name is ${intro.name} i am ${intro.age} years old , and my profession is ${intro.profession}.`
);
