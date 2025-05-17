let name, str;
//STEP 1 - Create an application that prompts the user for their name. Then, find the length of characters in the person’s name. 
function getNameLen(name) {
    alert (`Your name has ${name.length} characters.`);
}
name = prompt("Enter your name: ");
getNameLen(name);


//STEP 2 - prompts the user for their name, prompt the user for a numeric value so they can find the letter in the string based on the number they specify.
function getLetterInName(name) {
    let letter = name.charAt(pos);
    alert (`Position ${pos} in your name is: ${letter}`);
    return letter;
}
name = prompt("Enter your name: ");
let pos = prompt(`Enter a number (between 0 and ${name.length-1}): `);
getLetterInName(name);


//STEP 3 - prompt first name, last name, use a concatenation operator to concatenate the literal string with the result of the String object method’s result
function getFullName(fname, lname) {
    let fullName = fname + ' ' + lname;
    alert(`Your name is: ${fullName}`);
    return fullName;
}
let fname = prompt("Enter your first name: ");
let lname = prompt("Enter your last name: ");
getFullName(fname,lname);


//STEP 4 - find and display within an alert the index of the word “fox”.
function getIndex(str) {
    alert (`The index for the word 'fox' in the string is: ${str.indexOf('fox')}`)
}
str = 'The quick brown fox jumps over the lazy dog';
getIndex(str);


//STEP 5 - find and display within an alert the index of the last instance of the word “fox”.
function getLastIndex(str) {
    alert (`The last index for the word 'fox' in the string is: ${str.lastIndexOf('fox')}`)
}
str = 'The quick brown fox jumps over the lazy fox';
getLastIndex(str);


//STEP 6 - prompt the user for their full name, Then, replace the text “the lazy dog” in the variable with user full name
function newStr(name) {
    str = 'The quick brown fox jumps over the lazy dog';
    return (str.replace('the lazy dog', name));
    // return (str.slice(0, str.indexOf('the lazy dog')) + name)
}
name = prompt('Enter your full name: ');
alert (newStr(name));


//STEP 7 - prompt the user for a word. Next, search for the word within the string that the user enters into the prompt
function findWord(word) {
    str = 'The quick brown fox jumps over the lazy dog';
    if (str.indexOf(word) !== -1) {
        alert (`Your word '${word}' is found in '${str}'`);
    }
    else {
        alert (`Your word '${word}' is NOT found in '${str}'`);
    }
}
word = prompt("Enter a word: ");
findWord(word);


//STEP 8 - use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable 
// and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
function getSubstr(old_string) {
    sub_string = 'the lazy dog';
    new_string = old_string.substr(old_string.indexOf(sub_string), sub_string.length).toUpperCase();
    alert(new_string);
    return new_string;
}
old_string = 'The quick brown fox jumps over the lazy dog';
getSubstr(old_string);


//STEP 9 - stores the text “ THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG  ” within a variable.
//          Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
function getLowerCase(str) {
    result = str.trim().toLowerCase();
    alert (result);
    return result;
}
str = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG  ';
getLowerCase(str);


//STEP 10 - Programmatically capitalize the first letter in the sentence and display the result in an alert.
function capFirstLetter(str) {    
    let result = str.charAt(0).toUpperCase() + str.slice(1);
    alert(`Corrected sentence is: ${result}`);
    return result;
}
str = 'the quick brown fox jumps over the lazy dog';
capFirstLetter(str);