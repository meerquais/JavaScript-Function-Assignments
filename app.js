// FUNCTIONS 

// Chapter 35-38 

// Question #1

/* function displayDateTime(){
    var now = new Date();
    var dateTime = now.toLocaleString();
    document.write(dateTime)
}

displayDateTime() */

// Question #2

// function greetUser(firstName, lastName){
//     var fullName = `${firstName} ${lastName}`;
//     alert(`Hello, ${fullName}! Nice to meet you.`)
// }

// greetUser('Meer','Quais');

// Question #3

// function addNums(){
//     var num1 = +prompt("Please Enter First Number");
//     var num2 = +prompt("Please Enter Second Number");
//     var sum = num1 + num2;
//     return sum
// }

// var results = addNums();
// document.write(results)

// Question #4

// function caluclator(num1 , num2 , operator){
//     var results;

//     if(operator === "+"){
//         results = num1 + num2;
//     }else if(operator === "-"){
//         results = num1 - num2
//     }else if(operator === "*"){
//         results = num1 * num2
//     }else if(operator === "/"){
//         results = num1 / num2
//     }else{
//         return "Invalid operator"
//     }

//     document.write(`${num1} ${operator} ${num2} = ${results}`);
//     return result;
// }

// var result = caluclator(5 , 9 , '*');

// Question #5

// function squares(num){
//     return num * num;
// }
// var result = squares(5);
// console.log(result)

// Question #6

// function factorial(num){

//     if(num < 0){
//         return 'Invalid input: cannot compute factorial of negative number';
//     }else if(num === 0){
//         return 1;
//     }else{
//         var result = 1;
//         for(var i = 1; i <=num; i++){
//             result *= i;
//         }
//         return result;
//     }
// }

// var result = factorial(6);
// console.log(result, "result")

// Question #7

// function count(start, end){
//     if(start > end){
//         alert('Invalid input: Start number should be less than or equal to end number.')
//     }else{
//         var counting = '';
//         for(let i = start; i <=end; i++){
//             counting += i + ' ';
//         }
//         document.write(counting);
//     }
// }
// count(90 , 20);

// Question #8

// function calculateHypotenuse(base, perpendicular){
//     function calculateSquare(num){
//         return num * num
//     }

//     var baseSquared = calculateSquare(base);
//     var perpendicularSquared = calculateSquare(perpendicular);
//     var hypotenuseSquared = baseSquared + perpendicularSquared;
//     var hypotenuse = Math.sqrt(hypotenuseSquared);

//     return hypotenuse;
// }

// var result = calculateHypotenuse(4 , 5);
// console.log(result , "result")

// Question #9

// function calculateRectangleArea(width, height){
//     var area = width * height;
//     return area;
// }

// function calculateRectangleArea2(){
//     var width = 10;
//     var height = 15;
//     var area = width * height;
//     return area;
// }

// var area1 = calculateRectangleArea(10, 15);
// console.log(area1 , "result1");

// var area2 = calculateRectangleArea2();
// console.log(area2 , "results2")

// Question #10

// function isPalindrome(str) {

//     var formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
//     var reversedStr = formattedStr.split('').reverse().join('');

//     return formattedStr === reversedStr;
//   }

//   var inputString = "madam";
// if (isPalindrome(inputString)) {
//   console.log(`${inputString} is a palindrome.`);
// } else {
//   console.log(`${inputString} is not a palindrome.`);
// }

// Question #11

    // function capitalizeFirstLetter(str){
    //     var words = str.split(' ');
        
    //     var capitalizedWords = words.map(word =>{
    //     var firstLetter = word.charAt(0).toUpperCase();
    //     var restOfWord = word.slice(1).toLowerCase();
    //     return firstLetter + restOfWord;
    // });
    // return capitalizedWords.join(' ');
    // }

    // var inputString = "the quick brown fox";
    // var capitalizedString = capitalizeFirstLetter(inputString);
    // console.log(capitalizedString , "result")

// Question #12

    // function findLongestWord(str){
    //     var words = str.split(' ');

    //     var longestWord = '';

    // for(var i=0; i<words.length; i++){
    //     var currentWord = words[i];
    //     if(currentWord.length > longestWord.length){
    //         longestWord = currentWord;
    //     }
    // }
    // return longestWord;
    // }

    // var inputString = "Web Development Tutorial";
    // var longestWord = findLongestWord(inputString);
    // console.log(longestWord , "result")

// Question #13

// function countOccurrences(str, letter) {
//     var count = 0;
  
//     for (var i = 0; i < str.length; i++) {
//       if (str.charAt(i) === letter) {
//         count++;
//       }
//     }
  
//     return count;
//   }

// var inputString = 'JSResourceS.com';
// var targetLetter = 'o';
// var occurrences = countOccurrences(inputString, targetLetter);
// console.log(occurrences);

// Question #14

// function calcCircumference(radius){
//     var circumference = 2 * Math.PI * radius;
//     console.log("The Circumference is " + circumference.toFixed(2));
// }

// function calcArea(radius){
//     var area = Math.PI * Math.pow(radius , 2);
//     console.log("The Area is " + area.toFixed(2));
// }

// var radius = 5;
// calcCircumference(radius);
// calcArea(radius);

// Chapter #43-48

// Question #1

// function myAlert(){
//     alert("Hello World")
// }

// Question #2

// function myAlert(){
//     alert("Thanks for purchasing a phone from us")
// }

// Question #3

// function deleteRow(button){
//     var row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }

// var table = document.getElementById("studentTable");
// var tbody = studentTable.getElementsByTagName("tbody")[0];

// for(var i = 0; i < 10; i++){
//     var row = document.createElement("tr");
//     var nameCell = document.createElement("td");
//     var ageCell = document.createElement("td");
//     var gradeCell = document.createElement("td");
//     var actionCell = document.createElement("td");
//     var deleteButton = document.createElement("button");

//     nameCell.textContent = "Student " + (i + 1);
//     ageCell.textContent = Math.floor(Math.random() * 10) + 15;
//     gradeCell.textContent = Math.floor(Math.random() * 10) + 1;
//     deleteButton.textContent = "Delete";
//     deleteButton.onclick = function(){
//         deleteRow(this);
//     };

//     actionCell.appendChild(deleteButton);
//     row.appendChild(nameCell);
//     row.appendChild(ageCell);
//     row.appendChild(gradeCell);
//     row.appendChild(actionCell);
//     tbody.appendChild(row);
// }

// Question #4

// function onMouseOver(imagePath) {
//     var image = document.getElementById('myImage');
//     image.src = "./images/download.jpg";
//   }
// function onMouseOut(imagePath) {
//     var image = document.getElementById('myImage');
//     image.src = "./images/download (1).jpg";
//   }

// Question #5

// var counterValue = 0;
// var counterElement = document.getElementById("counter");

// function increaseCounter(){
//     counterValue++;
//     counterElement.textContent = counterValue;
// }

// function decreaseCounter(){
//     if(counterValue > 0){
//         counterValue--;
//         counterElement.textContent = counterValue;
//     }
// }

// Chapter #49-52

// Question #1

// function displayFormData(event){
//     event.preventDefault();

//     var name = document.getElementById("name");
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");
//     var formDataDiv = document.getElementById("form-data");  
//     var nameValue = name.value;
//     var emailValue = email.value;
//     var passwordValue = password.value;
//     var formData ="<h2>Form Data:</h2>" +
//     "<p><strong>Name:</strong> " + nameValue + "</p>" +
//     "<p><strong>Email:</strong> " + emailValue + "</p>" +
//     "<p><strong>Password:</strong> " + passwordValue + "</p>";

// formDataDiv.innerHTML = formData;

// name.value = "";
// email.value = "";
// password.value = "";
// }

// Question #2

// function toggleDetails(itemId) {
//     var details = document.getElementById(itemId);

//     if (details.style.display === 'none') {
//       details.style.display = 'block';
//     } else {
//       details.style.display = 'none';
//     }
//   }

// Question #3

var students = [];
var studentTableBody = document.getElementById('studentTableBody');
var editForm = document.getElementById('editForm');
var editIdInput = document.getElementById('editId');
var editNameInput = document.getElementById('editName');
var editAgeInput = document.getElementById('editAge');

function addStudent(event) {
  event.preventDefault();

  var nameInput = document.getElementById('name');
  var ageInput = document.getElementById('age');

  var student = {
    id: Date.now().toString(),
    name: nameInput.value,
    age: ageInput.value
  };

  students.push(student);

  renderStudentRow(student);

  nameInput.value = '';
  ageInput.value = '';
}

function renderStudentRow(student) {
  var row = document.createElement('tr');

  var nameCell = document.createElement('td');
  nameCell.textContent = student.name;
  row.appendChild(nameCell);

  var ageCell = document.createElement('td');
  ageCell.textContent = student.age;
  row.appendChild(ageCell);

  var actionsCell = document.createElement('td');
  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';
  deleteButton.onclick = function() {
    deleteStudent(student.id);
  };
  actionsCell.appendChild(deleteButton);

  var editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.className = 'edit-btn';
  editButton.onclick = function() {
    editStudent(student);
  };
  actionsCell.appendChild(editButton);

  row.appendChild(actionsCell);

  studentTableBody.appendChild(row);
}

function deleteStudent(id) {
  students = students.filter(function(student) {
    return student.id !== id;
  });

  renderStudentTable();
}

function editStudent(student) {
  editIdInput.value = student.id;
  editNameInput.value = student.name;
  editAgeInput.value = student.age;

  editForm.style.display = 'block';
}

function updateStudent(event) {
  event.preventDefault();

  var id = editIdInput.value;
  var name = editNameInput.value;
  var age = editAgeInput.value;

  var student = students.find(function(student) {
    return student.id === id;
  });

  if (student) {
    student.name = name;
    student.age = age;
    renderStudentTable();
    cancelEdit();
  }
}

function cancelEdit() {
  editForm.style.display = 'none';
  editIdInput.value = '';
  editNameInput.value = '';
  editAgeInput.value = '';
}

function renderStudentTable() {
  studentTableBody.innerHTML = '';

  students.forEach(function(student) {
    renderStudentRow(student);
  });
}
