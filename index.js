// Code your solution here

// declare a function taking in an array and a string
// function findMatching(array, string) {
//     // return the value of the filter method with => func to match element to string lowercased
//     return array.filter(ele => ele.toLowerCase() === string.toLowerCase())
// }

// // declare function taking array and string
// function fuzzyMatch(array, string) {
//     // return filter method => function matching arr ele with string with charAt method
//     return array.filter(ele => ele.charAt() === string.charAt())
// }

// // declare function with driver array of obj and string
// function matchName(driver, string) {
//     //return filter method => with ele in object with property 'name' and match with string
//     return driver.filter(ele => ele.name == string)
// }

function findMatching(array, string) {
   return array.filter(name => name.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string){
    return array.filter(name => name.toLowerCase().charAt(0) === string.toLowerCase().charAt(0))
}

function matchName(driveObj, string){
    return driveObj.filter(id => id.name === string)
}