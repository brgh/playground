const checkbox1 = document.querySelector("#cb1");
const checkbox2 = document.querySelector("#cb2");

const checkbox1Value = document.querySelector("#cb1-value");
const checkbox2Value = document.querySelector("#cb2-value");

const button = document.querySelector("button"); 

console.log(checkbox1Value.innerText); 
console.log(checkbox2Value.innerText); 

checkbox1.addEventListener("click", () => {
  checkbox1Value.innerText = getDateTime(); 
})

checkbox2.addEventListener("click", () => {
  checkbox2Value.innerText = getDateTime(); 
})

button.addEventListener("click", () => {
    checkbox1.checked = false;
    checkbox2.checked = false; 
    checkbox1Value.innerText = "(placeholder)"; 
    checkbox2Value.innerText = "(placeholder)";
    
  })

function getDateTime() {
  return new Date().toJSON();
}