var input = prompt("Enter any decimal no","3.4");
var roundNo = Math.ceil(input);
var text = "This is my dummy text";
var newText = text.slice(0,4);
alert(newText);
        var textArray =[];
    for (var i = 1; i <= newText.length; i++) {
        textArray[i] = newText.charAt(newText.length-i);    
    }
alert(textArray.join('')); 
            