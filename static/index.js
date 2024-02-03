const moneyElement= document.getElementById("user-score");
const gameButton= document.querySelector(".CSS-clickgamebutton")
const farmBuy= document.querySelector(".CSS-buybutton")
const farmCount= document.querySelector(".JS-farmcount")
const farmPriceEle= document.querySelector(".CSS-itemcost");
const farmPrice = 10;
let clicks = 0;
let secondProfit = 0;

const clicked = () => clicks += 1;

const addMoney = () => {
    moneyElement.innerHTML = Number(moneyElement.innerHTML) + clicks
    clicks = 0;    
};

if (!moneyElement.innerHTML)
    moneyElement.innerHTML= Number(0);
if (!farmCount.innerHTML)
    farmCount.innerHTML= Number(0);


gameButton.addEventListener("click",clicked)

setInterval(addMoney,500)

