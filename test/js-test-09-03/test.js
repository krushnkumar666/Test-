// count the number of names starting with "A"?
// const names = ['Alice', 'Bob', 'Charlie','Anna','Alex','Charlie','Amanda'];
// const aNames = names.filter(name => name.charAt(0) === 'A');
// console.log(aNames.length);

//find the average age ?
const people = [
    {name:'Alice',age:25},
    {name:'Bob',age:30},
    {name:'Charlie',age:22},
    {name:'David',age:28}
];
function averageOfAge(arr) {
 const sum = arr.reduce((x,y)=>{
    return x+y.age/arr.length;
 })
return arr;
}
const average = averageOfAge(people);
console.log(average);




// find the two numbers with the maximum sum
// function MaxSum(arr) {
//     const sortedArr = arr.slice().sort((a, b) => b - a);
//     return [sortedArr[0], sortedArr[1]];
//   }
//   console.log(MaxSum([10,-2,8,15,-5,20,3]));