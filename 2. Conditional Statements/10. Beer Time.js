/*

    A beer time is after 1:00 PM and before 3:00 AM.
    Write a program that enters a time in format “hh:mm tt” (an hour in range [01...12], a minute in range [00…59] and AM / PM designator) and prints beer time or non-beer time according to the definition above or invalid time if the time cannot be parsed.

Examples:
time           	result
1:00 PM 	beer time
4:30 PM 	beer time
10:57 PM 	beer time
8:30 AM 	non-beer time
02:59 AM 	beer time
03:00 AM 	non-beer time
03:26 AM 	non-beer time
*/

//  ------------------SOLUTION------------------


// Input.
let input = [
'23', // ------Hours (00-24) -The program will convert to AM/PM automatically   /// For example: 00:23 = 12:23 am or 16:23 = 4:57 pm.
'57'// ------- Minutes
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution
h = +gets()
m = +gets()
function formatAMPM(date) {
    let hours = h;
    let minutes = m;
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

if (h >= 13&& m >=00 || h <= 02 && m <= 59) {
    console.log(`${formatAMPM(h)} -> beer time`);
}
else if (h <= 12&& m <= 59 || h >= 03 && m >= 01) {
    console.log(`${formatAMPM(h)} -> non beer time`);
}
else
console.log(`Invalid time`)