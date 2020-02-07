
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