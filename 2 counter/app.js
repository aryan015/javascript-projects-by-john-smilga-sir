const _div = document.querySelector('div');
const _decrease = _div.children[2].children[0];
const _reset = _div.children[2].children[1];
const _increase = _div.children[2].children[2];
const counter = document.getElementById('counter');


let count = 0;

// --------- Decrease ---------
_decrease.addEventListener('click',function(){
  --count;
  console.log(count);

  if (count == 0) {
    counter.textContent = count;
    counter.style.color = "black";
  }
  else if(count<0){
    counter.textContent = count;
    counter.style.color = 'red';
  }

  else{
    counter.textContent = count;
  }
})

// --------- Reset ----------
_reset.addEventListener("click", function () {
  count=0;
  counter.textContent = count;
  counter.style.color = 'black';
});

// -------- Increase --------- 
_increase.addEventListener("click", function () {
  ++count;
  console.log(count);
  if(count==0){
    counter.textContent = count;
    counter.style.color = 'black'
  }

  else if (count > 0) {
    counter.textContent = count;
    counter.style.color = "green";
  }

  else {
    counter.textContent = count;
  }
});

