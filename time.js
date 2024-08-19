let time = document.getElementById("time");


function getCurrentTime()
{
    let now = new Date();//Get current time

    let hours = now.getHours();//Get current hour
    let minutes = now.getMinutes();//Get current minutes

    time.innerText = hours + ":" + minutes;
}

setInterval(getCurrentTime, 1000);

