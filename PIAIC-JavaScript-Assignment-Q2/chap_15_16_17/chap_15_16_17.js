var courses = [];
var course1 = prompt("Enter course1");
courses.push(course1);
var course2 = prompt("Enter course2");
courses.push(course2);
var course3 = prompt("Enter course3");
courses.push(course3);
var course4 = prompt("Enter course4");
courses.push(course4);
var course5 = prompt("Enter course5");
courses.push(course5);
alert(courses);
         
var courses1=[];
course1=prompt(course1,course1);
courses1.push(course1);
course2=prompt(course2,course2);
courses1.push(course2);
course3=prompt(course3,course3);
courses1.push(course3);
course4=prompt(course4,course4);
courses1.push(course4);
course5=prompt(course5,course5);
courses1.push(course5);
        
courses.splice(0,5,course1,course2,course3,course4,course5);
alert(courses);