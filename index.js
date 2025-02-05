/*
 we going to add event is my birthday 15/apr/2025, today is 17/jan/2025,
 we going start timer today to untill my birthday
*/

let d = document.querySelector('#d');

let h =document.querySelector('#h')

let m = document.querySelector('#m');

let s = document.querySelector('#s');




function reloadTime() {

    let myBirthday = new Date('Apr 15 2025 00:00:00'); // getting my birthday date and saves in myBirthday

    let currentDate = new Date(); // we getting current Date and save in 'currentdate'

    let diff = myBirthday-currentDate; // my birthday minue current date and saves in diff

    let days = Math.floor(diff/1000/60/60/24); // storing the days with cutting the decimal value use of Math.floor

    let hours = Math.floor((diff/1000/60/60)%24); // storing hours with remainder of difference of date

    let minutes = Math.floor((diff/1000/60)%60); // minutes

    let seconds = Math.floor((diff/1000)%60); // seconds

    d.innerHTML = days<10?"0"+days:days;
    h.innerHTML = hours<10?"0"+hours:hours;
    m.innerHTML = minutes<10?"0"+minutes:minutes;
    s.innerHTML = seconds<10?"0"+seconds:seconds;

}

setInterval(reloadTime, 1000);


/*
    1000ms = 1s
    60s = 1m
    60m = 1hr
    24hrs = 1day

*/


                                                       