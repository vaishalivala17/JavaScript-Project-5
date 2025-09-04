// Question:3 :- Function for finding maximum and minimum values in an array
function findMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];

  arr.forEach(num => {
    if (num > max) max = num;
    if (num < min) min = num;
  });

  return { max, min };
}

// Question: 1

document.write("<h3>Question:1 Expected Output:</h3>");
document.write("i: " + "[Red,Green,White,Black] <br>");
document.write("ii: " + "[Red+Green+White+Black] <br>");
document.write("iii: " + "[Red,Green,White] <br>");
document.write("iv: " + "[Red] <br>");
document.write("v: " + "[Green,White] <br>");
document.write("vi: " + "[Red,Green,White,Black,Orange] <br>");
console.log("Question:1 Expected Output:");
console.log("i: " + "[Red,Green,White,Black] ");
console.log("ii: " + "[Red+Green+White+Black] ");
console.log("iii: " + "[Red,Green,White] ");
console.log("iv: " + "[Red] ");
console.log("v: " + "[Green,White] ");
console.log("vi: " + "[Red,Green,White,Black,Orange] ");


let myColor = ["Red", "Green", "White", "Black"];

document.write("<br><h3>Output:</h3>");
console.log("Question:1 Output:");

// Question-1.i
document.write("i: " + myColor.join(",") + "<br>");
console.log("i: " + myColor.join(","));       

// Question-1.ii
document.write("ii: " + myColor.join("+") + "<br>");
console.log("ii: " + myColor.join("+"));       

// Question-1.iii
document.write("iii: " + myColor.slice(0, 3) + "<br>");
console.log("iii: " + myColor.slice(0, 3).join(",")); 

// Question-1.iv
document.write("iv: " + myColor[0] + "<br>");
console.log("iv: " + myColor[0]); 

// Question-1.v
document.write("v: " + myColor.slice(1, 3)+ "<br>");
console.log("v: " + myColor.slice(1, 3).join(","));

// Question-1.vi
myColor.push("Orange");
document.write("vi: " + myColor + "<br>");
console.log("vi: " + myColor); 


// Question-2
document.write("<br><hr><br>");

document.write("<h3>Question:2 Expected Output: </h3><p>Sum = 28</p>");
console.log("Question:2 Expected Output: Sum = 28");

let numbers = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;

// Using for loop
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

document.write("<h3>Output: </h3>");
console.log("Output:");

document.write("Sum using for loop: " + sum + "<br>");
console.log("Sum using for loop:", sum);

// Using forEach
let sum2 = 0;
numbers.forEach(num => sum2 += num);
document.write("Sum using forEach loop: " + sum2 + "<br>");
console.log("Sum using forEach loop:", sum2);

// Question-3

document.write("<br><hr><br>");
document.write("<h3>Question:3 Expected Output: </h3><p>Minimum = 1, Maximum = 84</p>");
console.log("Question:3 Expected Output: Minimum = 1, Maximum = 84");

document.write("<h3>Output: </h3>");
console.log("Output:");

//Function Calling
numbers = [2, 5, 6, 1, 3, 8, 9, 10, 84];
let result = findMaxMin(numbers);

document.write("Minimum number in the Array: " + result.min + "<br>");
console.log("Minimum number in the Array:", result.min);

document.write("Maximum number in the Array: " + result.max + "<br>");
console.log("Maximum number in the Array:", result.max);

// Question-4

document.write("<br><hr><br>");
document.write("<h3>Question:4 Expected Output: </h3><p>ASCII value of : 'X'=88, 'Y'=89, 'Z'=90</p>");
console.log("Question:4 Expected Output: ASCII value of 'X'=88, 'Y'=89, 'Z'=90");

document.write("<h3>Output: </h3>");
console.log("Output:");

let chars = ["X", "Y", "Z"];
let asciiValues = chars.map( v => v.charCodeAt(0));
document.write("ASCII value of : 'X'= " + asciiValues[0] + ", 'Y'= " + asciiValues[1] + ", 'Z'= " + asciiValues[2] + "<br>");
console.log(asciiValues);

// Question-5

document.write("<br><hr><br>");
document.write("<h3>Question:5 Expected Output: </h3><p>Nagative Value = 0, 1, 5, 12, 19, 20</p>");
console.log("Question:5 Expected Output: Nagative Value = 0, 1, 5, 12, 19, 20");

document.write("<h3>Output: </h3>");
console.log("Output:");

numbers = [-23, 0, 1, 5, 12, 19,-20,-17, -12, -5, 20];
let positiveNums = numbers.filter(n => n >= 0);

document.write("Positive Value in the Array = " + positiveNums + "<br>");
console.log("Positive Value in the Array =", positiveNums);

// Question-6

document.write("<br><hr><br>");
document.write("<h3>Question:6 Expected Output: </h3><p>Square of Array : 1, 4, 9, 16, 25, 36, 49</p>");
console.log("Question:6 Expected Output: Square of Array : 1, 4, 9, 16, 25, 36, 49");

document.write("<h3>Output: </h3>");
console.log("Output:");

numbers = [1, 2, 3, 4, 5, 6, 7];
let squares = numbers.map(n => n * n);

document.write("Square of Array : " + squares +  " <br>");
console.log("Square of Array :", squares + " ");

// Question-7

document.write("<br><hr><br>");
document.write("<h3>Question:7 Expected Output: </h3><p>i. Sort array in ascending order: [0, 1, 5, 5, 12, 12, 17, 19, 20, 23]<br>ii. Sort array in descending order: [23, 20, 19, 17, 12, 12, 5, 5, 1, 0] </p>");
console.log("Question:7.i Expected Output: Sort array in ascending order: [0, 1, 5, 5, 12, 12, 17, 19, 20, 23] ");

document.write("<h3>Output: </h3>");
console.log("Output:");

numbers = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
const sortedValues = numbers.toSorted((a, b) => a - b);

document.write("i. Sorted Array in ascending order: " + sortedValues + "<br>");
console.log("i. Sorted Array in ascending order:", sortedValues); // [0, 1, 5, 5, 12, 12, 17, 19, 20, 23]

console.log("Question:7.ii Expected Output:  Sort array in descending order: [23, 20, 19, 17, 12, 12, 5, 5, 1, 0] ");

console.log("Output:");

const reverseSortedValues = numbers.toSorted((a, b) => b - a);
document.write("ii. Sorted Array in descending order: " + reverseSortedValues + "<br>");
console.log("ii. Sorted Array in descending order:", reverseSortedValues); // [23, 20, 19, 17, 12, 12, 5, 5, 1, 0]

// Question-8
document.write("<br><hr><br>");

document.write("<h3>Question:8 Expected Output: </h3><p>Filters out any string which is less than 8 characters: Javascript</p>");
console.log("Question:8 Expected Output: Filters out any string which is less than 8 characters: Javascript");

document.write("<h3>Output: </h3>");
console.log("Output:");

words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
let filteredStrings = words.filter(s => s.length >= 8);

document.write("Filtered string words: " + filteredStrings + "<br>");
console.log("Filtered string words:", filteredStrings);

// Question-9
document.write("<br><hr><br>");

document.write("<h3>Question:9 Expected Output:</h3>");
document.write("i: " + "x = airplane,    Output:- r <br>");
document.write("ii: " + "x = oxoxoxox,   Output:- oXoXoXoX <br>");
document.write("iii: " + "x = A New Java Book,    Output:- a new java book , A NEW JAVA BOOK <br>");
console.log("Question:9 Expected Output:");
console.log("i: " + "x = airplane,    Output:- r ");
console.log("ii: " + "x = oxoxoxox,   Output:- oXoXoXoX ");
console.log("iii: " + "x = A New Java Book,    Output:- a new java book , A NEW JAVA BOOK ");

document.write("<h3>Output: </h3>");
console.log("Output:");

let q1 = "airplane";
document.write("i: " + "x = airplane,    Output:- " + q1.at(2) + " <br>");
console.log("i: " + q1.at(2));   // r

let q2 = "oxoxoxox";
document.write("ii: " + "x = oxoxoxox,   Output:- " + q2.replaceAll("x", "X") + " <br>");
console.log("ii: " + q2.replaceAll("x", "X")); // oXoXoXoX

let q3 = "A New Java Book";
document.write("iii: " + "x = A New Java Book,    Output:- " + q3.toLowerCase() +" , " + q3.toUpperCase() + "<br>");

console.log("iii: " + "x = A New Java Book,    Output:- " + q3.toLowerCase() +" , " + q3.toUpperCase());

// Question-10
document.write("<br><hr><br>");

document.write("<h3>Question:10 Expected Output: </h3> <p>Array Reverse = [7, 6, 5, 4, 3, 2, 1] </p>");
console.log("Question:10 Expected Output: Array Reverse = [7, 6, 5, 4, 3, 2, 1]");

numbers = [1, 2, 3, 4, 5, 6, 7];
let reversed = numbers.reverse();

document.write("<h3>Output: </h3>");
console.log("Output:");

document.write("Array Reverse = " + reversed + "<br>");
console.log("Array Reverse:", reversed);

// Question-11
document.write("<br><hr><br>");

document.write("<h3>Question:11 Expected Output: </h3><p>Numbers = [1, 2, 3, 4, 5, 6, 7]</p> <p>Value found = True, Value not found = False </p>");
console.log("Question:11 Expected Output: "  + "Numbers = [1, 2, 3, 4, 5, 6, 7] ");
console.log(" Value found = True, Value not found = False");

document.write("<h3>Output: </h3>");
console.log("Output:");

document.write("Value 3 found = " + numbers.includes(3) + "<br>"); // true
console.log("Value 3 found = " + numbers.includes(3));  // true
document.write("Value 10 found = " + numbers.includes(10) + "<br>"); // false
console.log("Value 10 found = " + numbers.includes(10)); // false

// Question-12
document.write("<br><hr><br>");

document.write("<h3>Question:12 Expected Output: </h3> <p>Name = Vaishali , Number of Character = 8</p>");
console.log("Question:12 Expected Output: Name = Vaishali , Number of Character = 8");

document.write("<h3>Output: </h3>");
console.log("Output:");

document.write("<p>Name = " + "Vaishali" + " , Number of Character = " + "Vaishali".length + "</p>");
console.log("Name = " + "Vaishali" + " , Number of Character = " + "Vaishali".length );

// Question-13
document.write("<br><hr><br>");

document.write("<h3>Question:13 Expected Output: </h3> <p>Input : - I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning.</p>");
document.write("<p>Output:-  I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning</p>");
console.log("Question:13 Expected Output:");
console.log("Input : - I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning.");
console.log("Output:-  I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning");

document.write("<h3>Output: </h3>");
console.log("Output:");

let text = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning.";

let newText = text.replaceAll("dog", "cat");

document.write("<p>" + newText + "</p>");
console.log(newText);

// Question-14

document.write("<br><hr><br>");

document.write("<h3>Question:14 Expected Output: </h3> <p>Input :- Hire the top 1% freelance developers</p>");
document.write("<p>Output :- [Hire, the, top, 1%] </p>");
console.log("Question:14 Expected Output: Input :- Hire the top 1% freelance developers");
console.log("Output :- [Hire, the, top, 1%]");

document.write("<h3>Output: </h3>");
console.log("Output:");

let inputText = "Hire the top 1% freelance developers";
let outputArray = inputText.split(" ", 4);

document.write("<p>Output Array = [" + outputArray.join(", ") + "]</p>");
console.log("Output Array:", outputArray);

// Question-15

document.write("<br><hr><br>");

document.write("<h3>Question:15 Expected Output: </h3> <p>Input:- ['5', 32, 'Daniel'];</p>");
document.write("<p>Output: 5,32,Daniel </p>");
console.log("Question:15 Expected Output: Input:- ['5', 32, 'Daniel'];");
console.log("Output: 5,32,Daniel");

document.write("<h3>Output: </h3>");
console.log("Output:");

let mixedArray = ['5', 32, 'Daniel'];
let outputString = mixedArray.join(",");

document.write("<p>Output: " + outputString + "</p>");
console.log("Output:", outputString);
