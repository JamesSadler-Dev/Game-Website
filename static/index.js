const moneyElement= document.getElementById("user-score");
const gameButton= document.querySelector(".CSS-clickgamebutton");
const farmBuy= document.querySelector(".CSS-buybutton");
const farmCount= document.querySelector(".JS-farmcount");
const farmPriceEle= document.querySelector(".CSS-itemcost");
const factoryBuy= document.querySelector(".CSS-facbuybutton");
const factoryCount= document.querySelector(".JS-faccount");
const factoryPriceEle= document.querySelector(".CSS-facitemcost");
let farmPrice = 10;
let clicks = 0;
let secondProfit = 0;
let factoryPrice = 150;

const clicked = () => clicks += 1;

const addProfit = (buildingProfit) => {
    secondProfit += buildingProfit;
}

const incrementMoney = () => {
    moneyElement.innerHTML = Number(moneyElement.innerHTML) + clicks + secondProfit;
    clicks=0
}

const buy = (itemCount,priceElement,moneyRate) => {
    let itemPrice = priceElement.innerHTML;
    if (Number(moneyElement.innerHTML) - itemPrice >= 0){
        moneyElement.innerHTML = moneyElement.innerHTML - itemPrice;
        itemCount.innerHTML = Number(itemCount.innerHTML) + 1;
        addProfit(moneyRate);
        itemPrice = parseInt(String(itemPrice * 1.1));
        priceElement.innerHTML = itemPrice;
    }
}

if (!moneyElement.innerHTML)
    moneyElement.innerHTML= Number(0);
if (!farmCount.innerHTML)
    farmCount.innerHTML= Number(0);
if (!factoryCount.innerHTML)
    factoryCount.innerHTML= Number(0);

gameButton.addEventListener("click",clicked);

farmBuy.addEventListener("click",() => {
    buy(farmCount,farmPriceEle,1);
});
factoryBuy.addEventListener("click",() => {
    buy(factoryCount,factoryPriceEle,10);
});
setInterval(incrementMoney,500);
