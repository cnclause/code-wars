// Some numbers have funny properties. For example:
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
// we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:
// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.
// Note: n and p will always be given as strictly positive integers. 

// function digPow(n, p){
//     if(n > 1)
//   }
  
function digPow(n, p){
  let string = n.toString();
  let result = 0;
  for(var i = 0; i < string.length ; i++) {
    var number = parseInt(string.charAt(i));
    result +=  Math.pow(number, p + i)
  }
  var x = Math.pow(n,p);
  if(result === x){
    console.log(p);
    } else if(result%n === 0) {
    console.log(result / n);
  }else {
    console.log(-1)
  }
}

  digPow(46288, 3)

//   Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.

const s1="aabcd"
const s2 ="xxxxyyzeef"

function longest(s1, s2) {
  // your code
  const array1 = s1.split('')
  const array2= s2.split('')
  const combined = array1.concat(array2)
  let unique = [...new Set(combined)]

  console.log(unique.join(''))
}

longest(s1, s2)

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

a =["cat", "dog"]
b = ["dog"]

function arrayDiff(a, b){

  let repeatedElement = []

  for(let element of b){
    if(a.includes(element)){
      repeatedElement.push(element)
    }
  }
  if(repeatedElement.length >= 1){
    for(let e in repeatedElement){
     let elementinA = a.find(element => element == repeatedElement[e])

     let index = a.indexOf(elementinA)
     if(index > -1){
       a.splice(index, 1)
     }
    }
  }
  console.log(a)
}

arrayDiff(a, b)