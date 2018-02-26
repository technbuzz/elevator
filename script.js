const lifts = 4;
const liftContainer = document.querySelector('.lift-container')
const lift = document.querySelector('.lift');
const nextBtn = document.querySelector('#goToNext');
const prevBtn = document.querySelector('#goToPrev');


function createFloors(number){
  let i=0,iLength=number;
  for(i; i<iLength;i++){
  const el = document.createElement('div');
  el.textContent = i;
  el.classList.add('floor');
  liftContainer.appendChild(el);
  }
}

function initContainerHeight(){
  liftContainer.style.height = lifts * 100 + 'px';
  liftContainerHeight = parseInt(window.getComputedStyle(liftContainer,null).getPropertyValue('height'));
  liftHeight = parseInt(window.getComputedStyle(lift,null).getPropertyValue('height'));
}

createFloors(lifts);
initContainerHeight();

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

const getPos = document.querySelector('.getPos');

getPos.addEventListener('click', getPosition);

function getPosition(){
  navigator.geolocation.getCurrentPosition(x => console.log(x),err=>console.log(err));
}

nextBtn.addEventListener('click',nextFloor);
prevBtn.addEventListener('click',prevFloor);
document.addEventListener('keyup', (event)=>{
  if(event.keyCode === 38) prevFloor();
  if(event.keyCode === 40) nextFloor();
});


