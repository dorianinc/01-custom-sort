function ageSort(users) {
  // Your code here

  return users.sort(function (a, b) { return a.age - b.age });
}

function oddEvenSort(arr) {
  // Your code here
  let odd = [];
  let even = [];

  for (let num of arr) {
    if (num % 2 === 0) even.push(num);
    else odd.push(num);
  }
  let evenSorted = even.sort(function (a, b) { return a - b })
  let oddSorted = odd.sort(function (a, b) { return a - b })
  return [...oddSorted, ...evenSorted]
}

function validAnagrams(s, t) {
  /*
  1. set two arrays
  2. itterate through strings and push each letter array
  3. sort both arrays
  4 compare sorted arrays - if equal return true, if not return false
  */
  if (s.length !== t.length) return false;
  let sArray = []
  let tArray = []
  for (let i = 0; i < s.length; i++) {
    sArray.push(s[i])
  }
  for (let i = 0; i < t.length; i++) {
    tArray.push(t[i])
  }
  let sSorted = sArray.sort()
  let tSorted = tArray.sort()
  if (tSorted.join('') == sSorted.join('')) return true;
  else return false;

}

function reverseBaseSort(arr) {
  return arr.sort(function (a, b) { return (Math.floor(Math.log10(b)) - Math.floor(Math.log10(a))) || (a - b) })
}

function frequencySort(arr) {
  // ascending based off quantity and descending if quantity is the same
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (obj[num] === undefined) {
      obj[num] = 1
    } else {
      obj[num] += 1
    }
  }
  //1 b before a
  //0 nothing
  //-1 a comes before b
  console.log(obj)
  return arr.sort((a, b) => {
    if (obj[a] === obj[b]) {
      return b - a
    } else if (obj[a] > obj[b]) {
      return 1
    } else return -1
  })
  // console.log('object', obj)
  // let keys = Object.entries(obj)
  // console.log('unsorted', keys)
  // let sorted = keys.sort(function (a, b) { return a[1] - b[1] });
  // console.log('sorted', sorted)

  // return sorted.sort(function (a, b) { return (Math.floor(Math.log10(b)) - Math.floor(Math.log10(a))) || (a - b) })

}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
