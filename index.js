// Write a function that prints the first n square numbers and also calculates the sum of these numbers.
const printSquareNumbers = (n) => {
  //write code here
  let total = 0

for (let i = 1; i <= n; i++) { //for loop

  let sqre = i*i; //finding the squares of each i value until n

  console.log(sqre); //logging the squares each iteration
  /*add up the total squares*/
  total += sqre; //adding squares to total AND redeclaring total

}
console.log(total); //logging the total
}
printSquareNumbers(5);
//will print: 1, 4, 9, 16, 25
// Final output is: 55
