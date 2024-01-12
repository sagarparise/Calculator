let btns = document.querySelectorAll(".btns");
let screen = document.getElementById("screen");

btns.forEach((btn)=>{
  btn.addEventListener('click', calulation);
})

function calulation(event){
  let currVal =  event.target.value
  if(currVal == 'x'){
    currVal = '*';
  }
  if(currVal === 'AC')
  {
    screen.value = ""
  }
  else if(currVal === 'DEL'){
     
    let str = screen.value.toString();
    screen.value = str.slice(0,-1);
  }

  else if(currVal === '='){
    let result = eval(screen.value)
    screen.value = result;
  }
  else{
    screen.value = screen.value + currVal;
  }
}




