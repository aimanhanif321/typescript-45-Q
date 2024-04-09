//44. Sandwiches: Write a function that accepts a array of items a person wants
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
