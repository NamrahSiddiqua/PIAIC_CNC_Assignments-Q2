var inputValue = prompt("Convert content in Capitalize","cloUd naTive computinG");

function capitalizeCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
}
console.log(capitalizeCase(inputValue));