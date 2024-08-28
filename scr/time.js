let time = document.getElementById("time");
let date = document.getElementById("date");



function getCurrentTimeAndDate()
{
    let now = new Date();//Get current time

    let hours = now.getHours();//Get current hour
    let minutes = now.getMinutes();//Get current minutes

    let getMonth = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let getDay = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
        "Saturday"
    ];

    
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDay();
    let dayOfMonth = now.getDate(); // Obtiene el número del día del mes
     // Check whether AM or PM
     let newformat = hours >= 12 ? 'PM' : 'AM';

     // Find current hour in AM-PM Format
     hours = hours % 12;
 
     // To display "0" as "12"
     hours = hours ? hours : 12;
     minutes = minutes < 10 ? '0' + minutes : minutes;
    
    //This makesures that 2 digits appear when showing the first 10 minutes(from 00 to 09)
    minutes = minutes.toString().padStart(2, '0');

    time.innerText = hours + ":" + minutes + " " + newformat;
    date.innerText = getDay[day] + ", " + dayOfMonth +" " + getMonth[month] + " " + year;
}



setInterval(getCurrentTimeAndDate, 1000);

