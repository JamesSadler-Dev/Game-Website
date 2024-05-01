const moneyElement = document.getElementById("user-score");
const gameButton = document.querySelector(".CSS-clickgamebutton");
const farmBuy = document.querySelector(".CSS-buybutton");
const farmCount = document.querySelector(".JS-farmcount");
const farmPriceEle = document.querySelector(".CSS-itemcost");
const factoryBuy = document.querySelector(".CSS-facbuybutton");
const factoryCount = document.querySelector(".JS-faccount");
const factoryPriceEle = document.querySelector(".CSS-facitemcost");

let clicks = 0;
let secondProfit = 0;
let farmPrice = 10;
let factoryPrice = 150;


window.addEventListener('load', () => {
    moneyElement.innerHTML = parseInt(localStorage.getItem('money')) || '0';
    farmCount.innerHTML = parseInt(localStorage.getItem('farmCount')) || '0';
    factoryCount.innerHTML = parseInt(localStorage.getItem('factoryCount')) || '0';
    farmPriceEle.innerHTML = parseInt(localStorage.getItem('farmPrice')) || farmPrice;
    factoryPriceEle.innerHTML = parseInt(localStorage.getItem('factoryPrice')) || factoryPrice;
    secondProfit = parseInt(localStorage.getItem('secondProfit')) || secondProfit;
});

const clicked = () => {
    clicks += 1;
};

const addProfit = (buildingProfit) => {
    secondProfit += parseInt(buildingProfit);
};

const saveGameState = () => {
    localStorage.setItem('money', moneyElement.innerHTML);
    localStorage.setItem('farmCount', farmCount.innerHTML);
    localStorage.setItem('factoryCount', factoryCount.innerHTML);
    localStorage.setItem('farmPrice', farmPriceEle.innerHTML);
    localStorage.setItem('factoryPrice', factoryPriceEle.innerHTML);
    localStorage.setItem('secondProfit', secondProfit);
};

const incrementMoney = () => {
    moneyElement.innerHTML = parseInt(moneyElement.innerHTML) + clicks + secondProfit;
    clicks = 0;
};

const buy = (itemCount, priceElement, moneyRate) => {
    let itemPrice = parseInt(priceElement.innerHTML);

    if (Number(moneyElement.innerHTML) >= itemPrice) {
        moneyElement.innerHTML = Number(moneyElement.innerHTML) - itemPrice;
        itemCount.innerHTML = Number(itemCount.innerHTML) + 1;
        addProfit(moneyRate);
        itemPrice = Math.ceil(itemPrice * 1.1);
        priceElement.innerHTML = itemPrice;
    }
};

gameButton.addEventListener("click", clicked);

farmBuy.addEventListener("click", () => {
    buy(farmCount, farmPriceEle, 1);
});

factoryBuy.addEventListener("click", () => {
    buy(factoryCount, factoryPriceEle, 10);
});

setInterval(incrementMoney, 500);
setInterval(saveGameState, 500);