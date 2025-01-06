var subOne = +prompt("Enter Your Math Marks");
var subTwo = +prompt("Enter Your Physics Marks");
var subThree = +prompt("Enter Your Islamiat Marks");

var totalMarks = 300

var obtainedMarks = subOne + subTwo + subThree;

var userPercentage = (obtainedMarks / totalMarks) * 100;

alert("Youv've got" + obtainedMarks)
alert("Your percentage is " + userPercentage)

if (userPercentage >= "80") {
    alert("Your Grade is A1");
    alert("Excellent")
}
else if (userPercentage >= "70") {
    alert("Your Grade is A")
    alert("Good")
}
else if (userPercentage >= "60") {
    alert("Your Grade is B")
    alert("You need to IMPROVE")
}
else if (userPercentage <= "60") {
    alert("You are FAIL")
    alert("SORRY")
}