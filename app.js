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



// {
//     // 1 masala 
//     function circleArea(circle) {
//         return Math.PI * Math.pow(circle.radius, 2);
//     }

//     const center = new Point(0, 0);
//     const myCircle = new Circle(center, 5);

//     console.log(circleArea(myCircle));
// }






// {
//     // 2 masala 
//     function validateCode(code) {
//         const codeStr = code.toString();

//         return /^[123]/.test(codeStr);
//     }

//     console.log(validateCode(12345));
//     console.log(validateCode(23456));
//     console.log(validateCode(34567));
//     console.log(validateCode(45678));
//     console.log(validateCode(0));
// }





// {
//     // 3 masala 
//     function distinct(a) {
//         const seen = new Set();

//         return a.filter(item => {
//             if (seen.has(item)) {
//                 return false;
//             } else {
//                 seen.add(item);
//                 return true;
//             }
//         });
//     }

//     console.log(distinct([1, 1, 2]));
//     console.log(distinct([1, 2, 1, 1, 3, 2]));
// }




// {
//     // 4 masala 

//     function combat(health, damage) {

//         const newHealth = health - damage;
//         return newHealth < 0 ? 0 : newHealth;
//     }
// }
