
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  //const spanColor = document.querySelector(".color");
  
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');
  const bgColor = document.querySelector('body')

console.log(bgColor)


let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    let i = getRandomHexColor();
    bgColor.style.backgroundColor = i;
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  //stopBtn.classList.add(button.start.class)
});


stopBtn.addEventListener("click", () => {
  
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerId);
});


