let search = document.querySelector(".search");
let clear= document.querySelector(".clear");
let input = document.querySelector("input");
clear.addEventListener("click",()=>{
    input.value = '';
});
window.addEventListener("click",()=>{
    if(input.value.length>0){
clear.style.display='block';
    }
});
search.addEventListener("click",()=>{
window.location.href=`https://www.google.com/search?q=${input.value}`;
});