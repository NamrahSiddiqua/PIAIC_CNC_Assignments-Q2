var sub1 = Number(prompt("Enter Marks Obtained in 1st Subject"));
var sub2 = Number(prompt("Enter Marks Obtained in 2nd Subject"));
var sub3 = Number(prompt("Enter Marks Obtained in 3rd Subject"));
var sub4 = Number(prompt("Enter Marks Obtained in 4th Subject"));
var sub5 = Number(prompt("Enter Marks Obtained in 5th Subject"));
var totalMarks = Number(prompt("Enter Total Marks of 5 Subjects","500"));
var totalPercent = Math.round(((sub1+sub2+sub3+sub4+sub5)/totalMarks)*100);
alert(`Total Percentage: ${totalPercent}`);

switch(true) {
    case (totalPercent >= 90 && totalPercent <= 100):
        alert("Grade A+");
        break;
            
    case (totalPercent >= 75 && totalPercent <=89):
        alert("Grade A");
        break;   
                
    case (totalPercent >= 60 && totalPercent <= 74):
        alert("Grade B");
        break;  
                
    case (totalPercent >= 45 && totalPercent <= 59):
        alert("Grade C");
        break;

    case (totalPercent >= 30 && totalPercent <= 44):
        alert("Grade D");
        break;

    case (totalPercent >= 0 && totalPercent <= 29):
        alert("Grade F");
        break;    
}