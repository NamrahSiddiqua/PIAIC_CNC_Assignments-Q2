var courses = [];
for (var i=1;i<=5;i++){
    courses.push(prompt("Enter course"+i));
    }
    alert(courses);       
         
var courses1=[];
for (var i=0;i<=4;i++){
    courses1.push(prompt(courses[i],courses[i]));
    }
    alert(courses1);
        
for (var i=0;i<=4;i++){
    courses.splice(0,5,courses1[0],courses1[1],courses1[2],courses1[3],courses1[4]); 
    }
    alert(courses);
