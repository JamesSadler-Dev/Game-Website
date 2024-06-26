const dealerHand = document.querySelector("#CSS-dealerhand")
const playerHand = document.querySelector("#CSS-playerhand")
const money = document.querySelector("#money")
const streak = document.querySelector("#streak")
const betMod10Button = document.querySelector("#CSS-10")
const betMod20Button = document.querySelector("#CSS-20")
const betMod30Button = document.querySelector("#CSS-30")
const reset = document.querySelector("#CSS-resetgame")

let currentBetModifier = 20
const startingCash = 100
let handStarted = false
let playerCount = 0
let dealerCount = 0

const startingState = () => {
    money.innerHTML = startingCash
    currentBetModifier = 20
    playerCount= 0
    dealerCount= 0
    betMod10Button.setAttribute("class","CSS-betmod-buttons")
    betMod20Button.setAttribute("class","CSS-active-betmod")
    betMod30Button.setAttribute("class","CSS-betmod-buttons")
}

const setBetModifier = (num) => {
    if (num > money.innerHTML || handStarted == true){
        return
    }
    currentBetModifier = num
    if (num == 10){
        betMod10Button.setAttribute("class","CSS-active-betmod")
        betMod20Button.setAttribute("class","CSS-betmod-buttons")
        betMod30Button.setAttribute("class","CSS-betmod-buttons")
    } else if (num == 20){
        betMod10Button.setAttribute("class","CSS-betmod-buttons")
        betMod20Button.setAttribute("class","CSS-active-betmod")
        betMod30Button.setAttribute("class","CSS-betmod-buttons")
    } else if (num == 30){
        betMod10Button.setAttribute("class","CSS-betmod-buttons")
        betMod20Button.setAttribute("class","CSS-betmod-buttons")
        betMod30Button.setAttribute("class","CSS-active-betmod")
    }
}

const play = (mode) => {
    if (mode == "hit"){
        
    }
}

startingState()
betMod10Button.addEventListener("click",() => setBetModifier(10))
betMod20Button.addEventListener("click",() => setBetModifier(20))
betMod30Button.addEventListener("click",() => setBetModifier(30))
reset.addEventListener("click",() => startingState())