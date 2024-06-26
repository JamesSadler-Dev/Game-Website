const card1 = document.querySelector("#CSS-1")
const card2 = document.querySelector("#CSS-2")
const card3 = document.querySelector("#CSS-3")
const card4 = document.querySelector("#CSS-4")
const card5 = document.querySelector("#CSS-5")
const card6 = document.querySelector("#CSS-6")
const card7 = document.querySelector("#CSS-7")
const card8 = document.querySelector("#CSS-8")
const card9 = document.querySelector("#CSS-9")
const card10 = document.querySelector("#CSS-10")
const result = document.querySelector("#CSS-gambling-result")
const money = document.querySelector("#money")
const streak = document.querySelector("#winstreak")
const reset = document.querySelector("#CSS-resetbutton")
const startingCash = 100

const startingState = () => {
    result.innerHTML = "Ready!";
    result.setAttribute("class","CSS-result-black")
    money.innerHTML = startingCash;
    streak.innerHTML = 0;
}

const bet = (num) => {
    if (money.innerHTML == 0){
        return;
    }

    let roll = Math.ceil(Math.random() * 10);
    roll = roll < 10 ? roll : 10;
    const winner = roll.toString();
    result.innerHTML = winner;
        
    if (num == roll){
        money.innerHTML = Math.floor(parseInt(money.innerHTML * 3.5))
        streak.innerHTML = parseInt(streak.innerHTML) + 1;
    } else{
        streak.innerHTML = 0;
        if (money.innerHTML == 1){
            result.innerHTML = "You Lose!"
            result.setAttribute("class","CSS-result-red")
            money.innerHTML = 0;
        }
        money.innerHTML = Math.floor(parseInt(money.innerHTML * .8))
    }
}

startingState()
card1.addEventListener("click",() => bet(1))
card2.addEventListener("click",() => bet(2))
card3.addEventListener("click",() => bet(3))
card4.addEventListener("click",() => bet(4))
card5.addEventListener("click",() => bet(5))
card6.addEventListener("click",() => bet(6))
card7.addEventListener("click",() => bet(7))
card8.addEventListener("click",() => bet(8))
card9.addEventListener("click",() => bet(9))
card10.addEventListener("click",() => bet(10))
reset.addEventListener("click",() => startingState())