let d, d1;
//STEP 1 - get the number of days in a month. Display that result within the console window.
const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
year = 2024;
month = 2;
console.log(`Number of days in Year ${year} Month ${month} is: ${daysInMonth(year, month)}`);


//STEP 2 - get the month name from a particular date. Display that result within the console window.
const monthName = (d) => new Date(d).toLocaleString('default', {month: 'long'});
d = '02/15/2018';
console.log(`Month name for ${d1} is: ${monthName(d)}`)


//STEP 3 - test whether a date is a weekend. Display that result within the console window.
d = new Date();
dayOfWk = d.getDay();
if (dayOfWk === 0 || dayOfWk === 6) {
    console.log(`${d.toDateString()} is a weekend date.`);
} else {
    console.log(`${d.toDateString()} is a NOT a weekend date.`);
}


//STEP 4 - get yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.
const dayOfWeekName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
d = new Date();
const yesterday = (d) => dayOfWeekName[d.getDay() - 1];
console.log(`Yesterday is ${yesterday(d)}`);


//STEP 5 - gets the current day of the week. The twist here is that I want only the first letter of the day. 
//          If today is Tuesday, the letter T should be displayed in the console window.
const dayOfWeekName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
d = new Date();
const today = (d) => dayOfWeekName[d.getDay()];
console.log(`Today is ${today(d).substr(0,1)} - ${today(d)}`);
// console.log(`Today is (${today(d).substr(0,1)})${today(d).slice(1)}`);
