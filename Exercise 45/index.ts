// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.


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