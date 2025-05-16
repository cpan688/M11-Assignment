//STEP 1 - FUNCTION TO RETURN A PASSED STRING WITH LETTERS IN ALPHABETICAL ORDER
function sortString(inStr) {
    return inStr.split('').sort().join('');
}
let str = "webmaster";
console.log(sortString(str));


//STEP 2 - FUNCTION THAT ACCEPTS A STRING PARAMETER AND 
// CONVERTS THE FIRST LETTER OF EACH WORD OF THE STRING TO UPPER CASE
function capFirstLetter(inStr) {
    let oldArr = [];
    let newStr = '';
    let capWord = '';
    
    // (1) CONVERT THE STRING TO ALL LOWER CASE
    inStr = inStr.toLowerCase();

    // (2) SPLIT THE STRING INTO ARRAY OF SUBSTRINGS
    oldArr = inStr.split(' ')

    // (3) LOOP THRU THE ARRAY AND CONVERT THE FIRST LETTER OF EACH WORD IN ARRAY
    for (let i = 0; i < oldArr.length; i++) {
        capWord = oldArr[i].charAt(0).toUpperCase() + oldArr[i].slice(1);
        // console.log(capWord);
        newStr = newStr + capWord + ' ';
        // console.log(newStr);
    }  
    return newStr;
}
str = "tO BE, or not to be, that's the question!";
console.log(capFirstLetter(str));


//STEP 3 - FUNCTION THAT ACCEPTS A STRING AS A PARAM AND COUNTS # OF VOWELS WITHIN THE STRING
function countVowels(inStr) {
    let vowel = '';
    let vowelCount = 0;
    for (let i = 0; i < inStr.length; i++) {
        vowel = inStr.charAt(i).match(/(a|e|i|o|u)/);
        if (vowel !== null) {
            vowelCount++;
        }
    }
    return vowelCount;
}
str = 'To be or not to be, that is the question.';
console.log(`Number of vowels in this string is: ${countVowels(str).toString()}`);


//STEP 4 - FUNCTION THAT generates a string id (specified length) of random characters
function genRandomStr(len) {
    const alphanumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let outStr = '';
    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor((Math.random() * alphanumeric.length));
        outStr = outStr + alphanumeric.charAt(randomIndex);
    }
    return outStr;
}
len = 12;
console.log(`String with ${len} random characters: ${genRandomStr(len)}`);


//STEP 5 - FUNCTION THAT accepts a list of country names as input and returns the longest country name as output.
//  Longest_Country_Name(["Australia", "Germany", "United States of America"])
function Longest_Country_Name(arrList) {
    let longest = arrList[0].length;
    let longName = arrList[0];
    for (let i = 1; i < arrList.length; i++) {
        if (arrList[i].length > longest) {
            longest = arrList[i].length;
            longName = arrList[i];
        }
    }
    return longName;
}
let arrList = ["Australia", "Germany", "United States of America", "The People's Republic of China"];
console.log(`Longest country name is: ${Longest_Country_Name(arrList)}`)
