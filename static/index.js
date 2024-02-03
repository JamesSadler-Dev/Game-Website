const moneyElement= document.getElementById("user-score");
const gameButton= document.querySelector(".CSS-clickgamebutton")
const farmBuy= document.querySelector(".CSS-buybutton")
const farmCount= document.querySelector(".JS-farmcount")
const farmPriceEle= document.querySelector(".CSS-itemcost");
let farmPrice = 10;
let clicks = 0;
let secondProfit = 0;

const clicked = () => clicks += 1;

const addProfit = (buildingProfit) => {
    secondProfit += buildingProfit;
}

const incrementMoney = () => {
    moneyElement.innerHTML = Number(moneyElement.innerHTML) + clicks + secondProfit;
    clicks=0
}

const buyFarm = () => {
    if (Number(moneyElement.innerHTML) - farmPrice >= 0){
        moneyElement.innerHTML = moneyElement.innerHTML - farmPrice;
        farmCount.innerHTML = Number(farmCount.innerHTML) + 1;
        addProfit(1);
        farmPrice = parseInt(String(farmPrice * 1.1));
        farmPriceEle.innerHTML = farmPrice;
    }
}


if (!moneyElement.innerHTML)
    moneyElement.innerHTML= Number(0);
if (!farmCount.innerHTML)
    farmCount.innerHTML= Number(0);


gameButton.addEventListener("click",clicked)
farmBuy.addEventListener("click",buyFarm)
setInterval(incrementMoney,500)

