//algorithms and Data structure
// 1.Getting the largest number in an array
// 2.Getting the smallest number in an array
// 3.Mking the sum // product or diffrence of two numbers in an array meet target


//1.Getting the largest number in an array
let ourAges = [12, 9, 14, 78, 90, 98, 7, 14]


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

console.log(getLargestNumber(ourAges));

// note : to get the smallest number, change to Number .MAX_SAFE_INTEGER


// 3. MAKING the sum of two numbers in an array meet the target
// From the array above, get the indices of the sum of two ages that will give 16

//target = 16
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
  //return result
}

//console.log(twoSum(ourAges, target));

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

console.log(threesums(nums, target));

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
console.log(countMyNumbers());
console.log(countMyNumbers());
console.log(countMyNumbers());
console.log(countMyNumbers());
console.log(countMyNumbers());



//reversing a string
let myName = "oluwatunmisemodesola" ;
let reversedName = myName.split("").reverse().join("");


console.log(reversedName);



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


console.log(fibonacciGenerator());
console.log(fibonacciGenerator());
console.log(fibonacciGenerator());


function addToCarts() {
  let item = document.getElementById("the_added_item").value

  console.log(item);
  document.getElementById("the_added_item").textContent = document.getElementById("input_value").value

  
}


















