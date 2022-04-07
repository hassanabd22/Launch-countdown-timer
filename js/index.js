let date = document.querySelectorAll("h2");


// Set the date we're counting down to
let countDownDate = new Date("may 5, 2022 12:30:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  console.log(now);

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);


  date[0].innerHTML = days;
  date[1].innerHTML = hours;
  date[2].innerHTML = minutes;
  date[3].innerHTML = seconds;


}, 1000);