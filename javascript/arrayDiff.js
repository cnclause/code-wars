// / Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

a =[17,2,-8,-13,-7,-20,0,-11]
b = [-11,17,-20,2,-8]

// function arrayDiff(a, b){

//   let repeatedElement = []

//   for(let element of b){
//     if(a.includes(element)){
//       repeatedElement.push(element)
//     }
//   }
//   if(repeatedElement.length >= 1){
//     for(let e in repeatedElement){
//      let elementinA = a.find(element => element == repeatedElement[e])

//      let index = a.indexOf(elementinA)
//      if(index > -1){
//        a.splice(index, 1)
//      }
//     }
//   }
//   console.log(a)
// }

function arrayDiff(a, b) {
    // Use array filter to check if every num in array a can be found in array b
    return a.filter(num => {
      // If num is not found in array b, return num
      if (!b.includes(num)) {
        console.log(num);
      }
    });
  }

arrayDiff(a, b)