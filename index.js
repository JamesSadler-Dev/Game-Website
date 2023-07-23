
let moneyElement= document.getElementById("user-score");
let gameButton= document.querySelector(".CSS-clickgamebutton")
let farmBuy= document.querySelector(".CSS-buybutton")
let farmCount= document.querySelector(".JS-farmcount")
let farmPriceEle= document.querySelector(".CSS-itemcost");
let farmPrice = 10;
let currentMoney;
let moneyRate= 0;

if (!moneyElement.innerHTML)
    moneyElement.innerHTML= Number(0);

gameButton.addEventListener("click",incrementScore)
farmBuy.addEventListener("click",buyFarm)

setInterval(updateMoney, 1000)

function updateMoney(){
    moneyElement.innerHTML = Number(moneyElement.innerHTML) + moneyRate;
}

function incrementScore(){
    moneyElement.innerHTML = Number(moneyElement.innerHTML) + 1
    currentMoney= moneyElement.innerHTML
}

function buyFarm(){
    if (moneyElement.innerHTML - farmPrice > 0){
        farmPrice = Math.round(farmPrice * 1.1);
        farmPriceEle.innerHTML= farmPrice;
        moneyElement.innerHTML= Number(moneyElement.innerHTML) - farmPrice;
        farmCount.innerHTML = Number
        (farmCount.innerHTML) + 1;
        moneyRate += 1;
    }
}