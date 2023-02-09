// import { reject } from "lodash";
// import Notiflix, { Notify } from "notiflix";

import Notiflix from "notiflix";

const submitBtn = document.querySelector("button")
const form = document.querySelector("form")
const delayInput = document.getElementsByName("delay")
const stepInput = document.getElementsByName("step")
const amountInput = document.getElementsByName("amount")



 submitBtn.addEventListener("click", onSubmit);

function onSubmit (e){
  e.preventDefault();
  //
  const qtyOfCreatedPromise = amountInput[0].value;
    const delayStep = stepInput[0].value;
    const delayFirst = delayInput[0].value;
    
    for (let i = 1; i<=qtyOfCreatedPromise; i++)
    {
      let position = i;
      //let delay = delayFirst+delayStep;
      let delay = delayFirst + delayStep*(position-1);


  createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });

}
}


function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise ((resolve, reject) =>{
  setTimeout(()=> {if (shouldResolve) {
    resolve({position,delay})
  } else {
    reject({position, delay})
  }
    },delay);
  })
  }






