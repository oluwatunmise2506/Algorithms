//algorithms and Data structure
// 1.Getting the smallest number in an array
// 2.Getting the largest number in an array

//1.Getting the smallest number in an array
// A function that takes an array an returns the smallest value.let ourAges = [12, 9, 14, 78, 90, 98, 7, 14]

 let ourAges = [15, 3, 58, 7, 60, 62, 17, 151]
function getSmallestNumber(arr) {
  if (!arr || arr.length == 0 ) {
    return 0;
  }
  if (arr.length == 1) {
    return 0;
  }
let getminimumNumber = Number .MAX_SAFE_INTEGER

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
      

        if ( element < getminimumNumber ) {
          getminimumNumber = element
        }
    }



    return getminimumNumber;
  }

  //console.log(getSmallestNumber(ourAges));

  

function getLargestNumber(arr) {

    if (!arr || arr.length == 0) {
        return 0
    }
    if (arr.length == 1) {
        return 0 
    }
let getTheLargestNumber = Number .MIN_SAFE_INTEGER

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
        if ( element > getTheLargestNumber ) {
            getTheLargestNumber = element
        }
    }
    return getTheLargestNumber
}

//console.log(getLargestNumber(ourAges));

//Sum of an array
//A function that Calcultes the sum of all elements in an array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 function sumOfarray(arr) {
  let sum = 0
  let i = arr[0]
  
   if (!arr || arr.length == 0) {
        return 0;
    }
    if (arr.length == 1) {
        return 0 ;
    }

    for (let i = 0; i < arr.length; i++) {
      const myNumber = arr[i];
      sum += myNumber;

    }
     
    
    return sum;

 }
 //console.log(sumOfarray(numbers));

 //using the forEach method
 let total = 0

 function sumUp(number) {
  total += number;
 }
 numbers.forEach(sumUp);
 //console.log(total);


//Algorithm: Counting occurrences; determines how many times each item appears in a list

let groceries = ["Fish", "Garri", "Egusi", "Garri", "Crayfish", "Fish", "Garri"] 
function countItem(arr) {
  let item = {}

  for (let i = 0; i < arr.length; i++) {
    const newItem = arr[i];
      if (item[newItem]) {
        item[newItem]++
      } else {
        item[newItem] =  1
      } 
    
  }
  return item;
}
//console.log(countItem(groceries));    


//Linear search : Finding a specific item within a list by examining each  element one by one

let registredStudents = ["Ann", "Jane", "Bridget", "Mary",  "Nancy", "Bella"]
function findName(arr , name) {
  for (let i = 0; i < arr.length; i++) {

    if (name == arr[i]) {
        return [arr[i], i, "She is in Basic 4"];       
    }
  }
  // If name of student is not found || if condition is not met
  return "Name not found, she is not a registered student!"
}

//console.log(findName(registredStudents , "Ann"));
//console.log(findName(registredStudents , "Nancy"));
//console.log(findName(registredStudents , "Dan"));







// The Bubble Sort algorithm : Repeatedly compares and swaps adjacent elements in a list.
// The goal is to arrange the numbers in accending order; from the smallest to the biggest.
let numberList = [4, 1, 0,  7, 23, 32, 5, 62, 78, 45, 21, 18]

function sortNumbers(arr) {
  let L = arr.length
  // Outer loop : controls the number of times the sorting occurs
  for (let i = 0; i < L - 1; i++) {

    // Inner loop : compares and swaps
    for (let j = 0; j < L - i - 1; j++) {

      // if current number(element) is greater than the next,
      if (arr[j] > arr[j + 1]) {
        let currentNumber = arr[j]

        // They are swapped,
        arr[j] = arr[j + 1]

        // To move the larger number to the right
        arr[j + 1] = currentNumber
      }}}

      // Return the Sorted list
      return arr
    }   

console.log(sortNumbers(numberList));


let person = {
  name : "tope",
  age : 26,
  siblings : 34
}



keys = Object.values(person)
//console.log(keys);

// 3.Mking the sum // product or diffrence of two numbers in an array meet target



// note : to get the smallest number, change to Number .MAX_SAFE_INTEGER


// 3. MAKING the sum of two numbers in an array meet the target
// From the array above, get the indices of the sum of two ages that will give 16
let age = [5, 14, 2, 1, 10, 6]
target = 16
function twoSum(arr, target) {
  let result = [] ;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
  

  for (let j = 0; j < arr.length; j++) {
    const next = arr[j];
    
  

  if (current + next == target) {
       result.push(i)  
       result.push(j)  
       return result                                                                                                                                                                                                                                                                         
  }}}
  return result
}

//console.log(twoSum(age, target));

// Strictly Increasing integer in an array

    let nums = [4, 6, 7, 8, 9, 10, 12] 
    target = 3
 function threesums(array, target) {
      console.log("see money ooo");

    let result = []
    if (result.length != 3) {
      return 0
    }
     for (let i = 0; i < array.length; i++) {
      const firstNumber = array[i];
      
      for (let j = 1; j < array.length; j++) {
        const secondNumber = array[j];
         if (secondNumber - firstNumber == target  ) {
            result.push(i)
            result.push(j)
            return result

         }
        
        
      }
     }

 }

//console.log(threesums(nums, target));

// Adding new an increasing numbers into an array 
let theNumber = [];
let read = 1;
      // console.log(read++);
      // console.log(read++);
      // console.log(read++);
      // console.log(read++);
      

function countMyNumbers() {
  theNumber.push(read);
   read++;
  return theNumber;
};
// console.log(countMyNumbers());
// console.log(countMyNumbers());
// console.log(countMyNumbers());
// console.log(countMyNumbers());
// console.log(countMyNumbers());



//reversing a string
let myName = "oluwatunmisemodesola" ;
let reversedName = myName.split("").reverse().join("");


//console.log(reversedName);



function fibonacciGenerator() {

  let setOfNumbers = [0,1]
  

  for (let i = 0; i < setOfNumbers.length; i++) {
    const number1 = setOfNumbers[i];

    for (let j = 1; j < setOfNumbers.length; j++) {
      const element = setOfNumbers[j];

      answer = setOfNumbers[i] + setOfNumbers[j]

      while (answer) {

        setOfNumbers.push(answer)
           


        return  setOfNumbers 
      
      
    }
    
  }
 
}}
// console.log(fibonacciGenerator());
// console.log(fibonacciGenerator());
// console.log(fibonacciGenerator());
