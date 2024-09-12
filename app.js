const timeElement = document.querySelector(".time");
const dayElement = document.querySelector(".day");
const dateElement = document.querySelector(".date");


function currentTime() {

    let currentDate = new Date();

    // Current time
    let hour = currentDate.getHours().toString().padStart(2, "0");
    let minute = currentDate.getMinutes().toString().padStart(2, "0");
    let second = currentDate.getSeconds().toString().padStart(2, "0");
    timeElement.innerHTML = `${hour} : ${minute} : ${second}`;

    // Days 
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDay = daysOfWeek[currentDate.getDay()];
    dayElement.innerHTML = currentDay;

    //Date
    let day = currentDate.getDate().toString().padStart(2, "0");
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[currentDate.getMonth()];
    let year = currentDate.getFullYear();
    dateElement.innerHTML = `${day}, ${month}, ${year}`;
}


currentTime();
setInterval(() => {
    currentTime()
}, 1000)

