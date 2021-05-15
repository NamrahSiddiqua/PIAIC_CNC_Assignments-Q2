var name = prompt("Enter Your Name");
var dobD = prompt("Enter Your DOB (date)");
var dobM = prompt("Enter Your DOB (month)"); 
var dobY = prompt("Enter Your DOB (year)");
var day = prompt("Enter time of day like Morning etc")
console.log(`Hello ${name}, ${day}`);
 
 var d = new Date();
 d.setDate(dobD);
 d.setMonth(dobM);
 d.setFullYear(dobY);
 d.setHours(00);
 d.setMinutes(00);
 d.setSeconds(00);

 console.log(d);

 var DOB = dobM +" "+ dobD +","+dobY;
 var msDOB = Date.parse(DOB);
 var msNow = Date.now();
 var msAge = msNow - msDOB;
 
 var second = 1000;
 var minute = second*60;
 var hour = minute*60;
 var day = hour*24;
 var month = day*30; 
 var year = day*365;

 var years = Math.floor(msAge/year);
 var months = years*12;
 var days = years*365;
 var hours = Math.round(msAge/hour);
 var seconds = Math.round(msAge/second);

  console.log(`Your are ${years} years old`);
  console.log(`Your Age in Days ${days}`);
  console.log(`Your Age in Hours ${hours}`);


 var fDOB = "Jun 23, 2021";
 var msfDOB = Date.parse(fDOB);
 var msAge1 = msfDOB - msNow;

 var years1 = msAge1/year;
 var months1 = years1*12;
 var days1 = Math.floor(years1*365);
 var hours1 = Math.floor(msAge1/hour);
 var seconds1 = Math.floor(msAge1/second);

 console.log(`Your days in coming birthday ${days1}`);