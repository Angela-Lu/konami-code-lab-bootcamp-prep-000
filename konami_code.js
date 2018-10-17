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

document.addEventListener('keydown', (e)=>{init(e.key)}, false)

function init(e) {
 if(e == codes[index]) {
   index++
   if(index === codes.length) {
     alert("You win")
     index = 0
 }
 } else {
   index = 0
 }
 
 console.log(index)
}

