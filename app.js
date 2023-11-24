var arry = []

var objectNotationArray = []

var nameArray = ["Muhammad Nadeem"];


console.log(nameArray);

var numberArray = [123];

console.log(numberArray);

var bolArray = ["true"];

console.log(bolArray);

var fruits = ["Apple", "true", 123,];
console.log(fruits);


var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];


console.log(" Qualifications :");
for (var i = 0; i < educationQualifications.length; i++) {
    console.log(educationQualifications[i]);
}

var studentNames = ["Student1", "Student2", "Student3"];
var scores = [420, 350, 480];

console.log("Score of " + studentNames[0] + " " + "is 420. " + "Percentage : " + scores[0] * "100" / "500" + "%");
console.log("Score of " + studentNames[1] + " " + "is 350. " + "Percentage : " + scores[1] * "100" / "500" + "%");
console.log("Score of " + studentNames[2] + " " + "is 480. " + "Percentage : " + scores[2] * "100" / "500" + "%");


var colorArray = ["Red", "Green", "Blue"];

console.log(colorArray);

var colorToBeAddAtBigning = prompt("Enter a color to add to the beginning:");

colorArray.unshift(colorToBeAddAtBigning);

console.log(colorArray);

var colorToAddAtEnd = prompt("Enter a color to add to the end:");

colorArray.push(colorToAddAtEnd);

console.log(colorArray);

colorArray.unshift("Yellow", "Orange");

console.log(colorArray);

colorArray.shift();

console.log(colorArray);

colorArray.pop();

console.log(colorArray);

var indexToAddColor = prompt("Enter the index where you want to add a color:");
var colorToAddAtIndex = prompt("Enter the color name to add at that index:");
colorArray.splice(indexToAddColor, 0, colorToAddAtIndex);
console.log(colorArray);

var indexToDelete = prompt("Enter the index from which you want to delete color(s):");
var numberOfColorsToDelete = prompt("Enter the number of colors to delete:");
colorArray.splice(indexToDelete, numberOfColorsToDelete);
console.log(colorArray);

var studentScores = [320, 230, 480, 120];

console.log(studentScores);

studentScores.sort(function (a, b) { return a - b });

console.log(studentScores);




