// The overall purpose of this code is to define a function that formats a timestamp into a human-readable date and time format. 
// The code exports this function as a module.

// The code defines the function using an arrow function expression with two parameters: timeStamp and an options object with two optional properties: monthLength and dateSuffix.
const { timeStamp } = require("console");

const addDateSuffix = date => {
    let dateStr = date.toString();

    const lastChar = dateStr.charAt(dateStr.length -1);

    if (lastChar === '1' && dateStr !== '11') {
        dateStr = `${dateStr}st`;
    } else if (lastChar === '2' && dateStr !== '12') {
        dateStr = `${dateStr}nd`;
    } else if (lastChar === '3' && dateStr !== '13') {
        dateStr = `${dateStr}rd`;
    } else {
        dateStr = `${dateStr}th`;
    }

    return dateStr;
};

module.exports = (
    timeStamp,
    { monthLength = 'short', dateSuffix = true } = {}
) => {
    let months;

    if (monthLength === 'short') {
        months = {
            0: 'Jan',
            1: 'Feb',
            2: 'Mar',
            3: 'Apr',
            4: 'May',
            5: 'Jun',
            6: 'Jul',
            7: 'Aug',
            8: 'Sep',
            9: 'Oct',
            10: 'Nov',
            11: 'Dec'
        };
    } else {
        months = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December',
        };
    }

    const dateObj = new Date(timeStamp);
    const formattedMonth = months[dateObj.getMonth()];

    let day0fMonth;

    if (dateSuffix) {
        day0fMonth = addDateSuffix(dateObj.getDate());
    } else {
        day0fMonth = dateObj.getDate();
    }

    const year = dateObj.getFullYear();

    let hour;

    if (dateObj.getHours > 12) {
        hour = Math.floor(dateObj.getHours() / 2);
    } else {
        hour = dateObj.getHours();
    }

    if (hour === 0) {
        hour = 12;
    }

    const minutes = dateObj.getMinutes();

    let periodOfDay;

    if (dateObj.getHours() >= 12) {
        periodOfDay = 'pm';
    } else {
        periodOfDay = 'am';
    }

    const formattedTimeStamp = `${formattedMonth} ${day0fMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;

    return formattedTimeStamp;
};