let buttons = document.querySelectorAll(".btn");
let body = document.querySelector("body")
buttons.forEach((button) => {
  button.addEventListener("click",()=>{
    body.style.backgroundColor = button.getAttribute("id")
  })
});
