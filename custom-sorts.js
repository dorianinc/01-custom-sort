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
  // console.log(evenSorted);
  // console.log(oddSorted)
  return [...oddSorted, ...evenSorted]
}

function validAnagrams(s, t) {
  // Your code here
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];