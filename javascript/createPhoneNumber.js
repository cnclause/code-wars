// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!\\

let numbers = [0,1,2,2,3,4,5,7,8,9]

function createPhoneNumber(numbers){
    const firstThree = numbers.slice(0, 3).join('')
    const midThree = numbers.slice(3, 6).join('')
    const lastFour = numbers.slice(6).join('')
    
    const stringNumber = "("+firstThree+")"+" "+midThree+ "-"+lastFour

    console.log(stringNumber)

}

createPhoneNumber(numbers)