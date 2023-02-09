// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";
const timePicker = document.getElementById("datetime-picker");
const btnStart = document.querySelector("[data-start]");
const outputDays = document.querySelector("[data-days]");
const outputHours = document.querySelector("[data-hours]");
const outputMinutes = document.querySelector("[data-minutes]");
const outputSeconds = document.querySelector("[data-seconds]");
console.log(outputDays);

let outputSelectedDates;
btnStart.disabled = true;
//console.log(new Date())
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    outputSelectedDates = selectedDates[0];
    // console.log(diff);
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure("Please choose a date in the future");
      console.log("sljkdhfksdjfh");
    } else {
      btnStart.disabled = false;
      convertMs(outputSelectedDates - new Date());
    }
  },
};

btnStart.addEventListener("click", () => {
  timerId = setInterval(() => {
    if (outputSelectedDates - new Date() > 0) {
      convertMs(outputSelectedDates - new Date());
    }
  }, 1000);
  console.log(diff);
});

flatpickr(timePicker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  //return { days, hours, minutes, seconds };
  outputDays.textContent = days;
  outputHours.textContent = hours;
  outputMinutes.textContent = minutes;
  outputSeconds.textContent = seconds;
}


