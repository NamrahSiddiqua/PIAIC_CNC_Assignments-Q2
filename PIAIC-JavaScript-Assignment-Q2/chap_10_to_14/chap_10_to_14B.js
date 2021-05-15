var sub1 = Number(prompt("Enter Marks Obtained in 1st Subject"));
var sub2 = Number(prompt("Enter Marks Obtained in 2nd Subject"));
var sub3 = Number(prompt("Enter Marks Obtained in 3rd Subject"));
var sub4 = Number(prompt("Enter Marks Obtained in 4th Subject"));
var sub5 = Number(prompt("Enter Marks Obtained in 5th Subject"));
var totalMarks = Number(prompt("Enter Total Marks of 5 Subjects","500"));
var totalPercent = ((sub1+sub2+sub3+sub4+sub5)/totalMarks)*100;
alert(`Total Percentage: ${totalPercent}`);