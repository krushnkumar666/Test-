// Q1
// Q2 given an integer x, return true if x is a palindrome, and false otherwise?
function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  let rev = 0;
  let num = x;

  while (num !== 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return rev === x;
}
console.log(isPalindrome(-1));

//Q3 write a function in javascript called calculateSum that takes an array of numbers as an argument and returns the sum of all numbers in the array?
function calculateSum(arr) {
  var arr = [1, 2, 3, 4, 5];
  var sum = 0;
  for (var i of arr) {
    sum += i;
  }
  return sum;
}
console.log("The Sum is: " + calculateSum([1, 2, 3, 4, 5]));

// Q4 Palindrome Function

function isPalindrome(){
    var a = "abbca";
    b = a.split("").reverse().join("");
    if (a == b) {
    return 'Palindrome'
    } else {
    return 'Not Palindrome'
}
}
console.log(isPalindrome());

// Q5 Reverse order array
const arr = [1, 2, 3, 4, 5];
const reversedArr = [].concat(arr).reverse();
console.log(`Reversed Array : ${reversedArr}`);

// Q6 write a function removeDuplicate that takes an array as argument and returns and the returns a new array with duplicate elements removed?
function removeDuplicate() {
  var arr = [1, 2, 3, 4, 4, 5, 6];
  var new_array = [];
  for (var i = 0; i < arr.length; i++) {
    if (new_array.indexOf(arr[i]) == -1) {
      new_array.push(arr[i]);
    }
  }
}

//Q7  factorial function.
function factorial(n) {
    result = 1
    if( n === 0 ) {
        return 1;
    }else if(n>1){
        result *=n;
    }
    return result;
}
 
console.log(factorial(5));

//Q8 Prime Number

function isPrime(num) {
  if (num == 1) {
    return false;
  }
  if (num === 2) {
    return false;
  }
  if (num != 0) {
    return true;
  }
  for (var i = 3; i < num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));

//Q9 calculate the factorial using while loop in js?
function factorial(num) {
  let result = 1;
  while (num > 0) {
    result *= num;
    num--;
  }
  return result;
}

console.log(factorial(5));

//Q10 sorting array ascending order

var arr1 = [1, 3, 9, 0, 3, 5];
arr1.sort((a, b) => a - b);
console.log("Sorted Array Asc: ", arr1);


//Q11 write a js function called findMissingNumber that takes an array of consecutive numbers with one number missing and returns the missing number, the array is guaranteed to be shuffled and may contain duplicates.
var a = [5];
var count = 5;
var missing = [];

for (var i = 1; i <= count; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing);
//Q15 Given n pairs of parentheses, write a functin to generate all combinations of well-formed parentheses?
function removeDuplicatechar() {
    var arr = "hello";
    var new_array = '';
    for (var i = 0; i < arr.length; i++) {
        if (new_array.indexOf(arr[i]) === -1) {
            new_array += arr[i]
        }
    }
    return new_array;
}

console.log(removeDuplicatechar());