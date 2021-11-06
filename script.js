let wakeup = 7;
let noon =12;
let lunchtime=12;
let naptime= lunchtime+2;
let partytime;
let evening;

// show the current time : 
let showCurrentTime = function () {
	// display the string time on page
	let clock =document.getElementById('clock');
	let currentTime = new Date()

	let hours =currentTime.getHours();
	let minutes =currentTime.getMinutes();
	let seconds = currentTime.getSeconds();
	let meridian = "AM"
	// set hours 
	if (hours >= noon) { meridian = "PM" ; }
	if (hours > noon) { hours = hours - 12 ; }
	// set Minutes 
	if (minutes < 10) { minutes = "0" + minutes ;}
	// set seconds
	if (seconds<10) {
		seconds = "0" + seconds;
	}
	let clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
	clock.innerText = clockTime;
}