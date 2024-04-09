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
