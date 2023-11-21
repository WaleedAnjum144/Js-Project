const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

//   weekday name 

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

//   select the targeting element 

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let templateDate = new Date();
let templateYear = templateDate.getFullYear();
let templateMonth = templateDate.getMonth();
let templateDay = templateDate.getDate();

const futureDate = new Date(templateYear,templateMonth,templateDay + 10 , 11,30,0);

// get the separate he year , month etc from the future date and present like that 

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth() ;
month = months[month]
// console.log(month)

let weekday = weekdays[futureDate.getDate()];
const date = futureDate.getDate();

// now show it on the future date line 

giveaway.textContent = `giveaway enda on ${weekday},${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today ;

    // we get it in miliseconds 

    const oneDay = 24 * 60 * 60 *1000;
    const oneHour =  60 * 60 * 1000;
    const oneMinute =   60 * 1000;

    let days = t / oneDay;

    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set the arrays for all values 

    const values = [days,hours,minutes,seconds];
    function formate(item){
        if(item < 10){
            return item = `0${item}`
        }

        return item;
    }

    items.forEach(function (item,index){
        item.innerHTML = formate(values[index])
    })

    if (t < 0){
        clearInterval(countdown);
         deadline.innerHTML = `<h4 class="expired"> Sorry, this giveawy has expired!</h4>`;
    }


}

//countdown 
let countdown = setInterval(getRemainingTime,1000);

// set initial values 
getRemainingTime();


