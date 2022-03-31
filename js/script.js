var endTime = new Date("March 30 2023 17:00:00").getTime();

const timeInterval = setInterval(() => {
  const mainTitle = document.querySelector(".main-title");
  const daysElement = document.querySelector("#days");
  const hoursElement = document.querySelector("#hours");
  const minutesElement = document.querySelector("#minutes");
  const secondsElement = document.querySelector("#seconds");

  var now = new Date().getTime();
  var distance = endTime - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance <= 0) {
    clearInterval(timeInterval);
    mainTitle.textContent = 'Will be updated soon!'
    document.body.classList.add('expired');
  } else {
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
  }
}, 1000);
