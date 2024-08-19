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

    time.innerText = hours + ":" + minutes;
    date.innerText = getDay[day] + ", " + dayOfMonth +" " + getMonth[month] + " " +year;
}



setInterval(getCurrentTimeAndDate, 1000);

