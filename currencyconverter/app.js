const BASE_URL="https:cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns=document.querySelectorAll(".dropdown select");
const btn= document.querySelector("form button");
const fromCurr=document.querySelector(".form select");
const toCurr=document.querySelector(".to select");
const msg = document.querySelector(".msg");
for(let select of dropdowns){
    for(currcode in countryList){
        let newopt = document.createElement("option");
        newopt.innerText=currcode;
        newopt.value=currcode;
        if(select.name==="from" && currcode==="USD"){
            newopt.selected="selected";
        }else if(select.name==="to" && currcode==="INR"){
            newopt.selected="selected";
        }
        select.append(newopt);
    }
    select.addEventListener("change",(event)=>{
        updateflag(event.target);

    });

}
const updateflag=(element)=>{
    let currcode=element.value;
let countrycode=countryList[currcode];
let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
let img = element.parentElement.querySelector("img");
img.src=newsrc;
}; 
btn.addEventListener("click", async (evt)=>{
evt.preventDefault();
let amount=document.querySelector(".amount input");
let amtvalue=amount.value;
 
if(amtvalue===""||amtvalue<0){
    amtvalue=1;
    amount.value="1";
}
 
const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
let data= await response.json();
let rate = data[toCurr.value.toLowerCase()];
let finalamt=amtvalue*rate;
  msg.innerText=`${amount}${fromCurr.value} = ${finalamt}${toCurr.value}`;
});
