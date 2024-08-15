 const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const para = document.querySelector("#para");
let currmode="light";
 btn.addEventListener("click",()=>{
if(currmode==="light"){
currmode="dark";
body.classList.add("dark");
body.classList.remove("light");
para.innerText="this is a dark theme".toUpperCase();
btn.style.color="white";
btn.style.backgroundColor="black";
}
else{
    currmode="light";
    body.classList.add("light");
    body.classList.remove("dark");
    para.innerText="this is a light theme".toUpperCase();
    btn.style.color="black";
    btn.style.backgroundColor="white";
    
}
 })