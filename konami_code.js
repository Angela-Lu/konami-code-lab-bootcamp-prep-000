const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0

document.addEventListener('keydown', (e)=>{init(e)}, false)

function init(e) {
  console.log(e);
 const key = e.key
 if(key === codes[index]) {
   index++
   if (index === codes.length) {
     alert("You win")
     
     index = 0
 }
 } else {
   index = 0
 }
}

