const lifts = 3;
const liftContainer = document.querySelector('.lift-container')
const lift = document.querySelector('.lift');
const nextBtn = document.querySelector('#goToNext');
const prevBtn = document.querySelector('#goToPrev');

const liftContainerHeight = parseInt(window.getComputedStyle(liftContainer,null).getPropertyValue('height'));
const liftHeight = parseInt(window.getComputedStyle(lift,null).getPropertyValue('height'));

function createFloors(number){
  let i=0,iLength=number;
  for(i; i<iLength;i++){
  const el = document.createElement('div');
  el.classList.add('floor');
  liftContainer.appendChild(el);
  }
}

createFloors(3);

function nextFloor(){  
  let current = isNaN(parseInt(lift.style.top)) ? 0 : parseInt(lift.style.top);
  let finalValue = current + 100;
  if((finalValue+liftHeight) > liftContainerHeight) return;
  lift.style.top = finalValue + 'px';
    console.log(lift.style.top);
  
}

function prevFloor(){  
//   debugger;
  let current = isNaN(parseInt(lift.style.top)) ? 0 : parseInt(lift.style.top);
  let finalValue = current - 100;
  if((finalValue+liftHeight) <= 0) return;
  lift.style.top = finalValue + 'px';
    console.log(lift.style.top);
  
}

nextBtn.addEventListener('click',nextFloor);
prevBtn.addEventListener('click',prevFloor)


