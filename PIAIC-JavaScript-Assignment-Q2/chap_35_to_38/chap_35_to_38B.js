var inputValue = prompt("Enter a number for factorize");
         
function factorize(num){
    if (num ===0 || num === 1){
        return 1;
    }    
    for (var i = num - 1; i >= 1; i--){
        num = num * i;
    }
    return num;
}    
console.log(factorize(inputValue));