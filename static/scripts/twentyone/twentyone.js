const dealerHand = document.querySelector("#CSS-dealerhand")
const playerHand = document.querySelector("#CSS-playerhand")
const money = document.querySelector("#money")
const streak = document.querySelector("#streak")
const betMod10Button = document.querySelector("#CSS-10")
const betMod20Button = document.querySelector("#CSS-20")
const betMod30Button = document.querySelector("#CSS-30")
const reset = document.querySelector("#CSS-resetgame")
const hitButton = document.querySelector("#CSS-hit")
const startButton = document.querySelector("#CSS-start")

let currentBetModifier = 20
const startingCash = 100
let handStarted = false
let playerStaying = false
let gameFinished = false
let dealerStaying = false
let playerCount = 0
let dealerCount = 0
let playerCards = 0
let dealerCards = 0

const startingState = () => {
    money.innerHTML = startingCash
    currentBetModifier = 20
    handStarted = false
    playerStaying = false
    dealerStaying = false
    playerCount = 0
    dealerCount = 0
    playerCards = 0
    dealerCards = 0
    betMod10Button.setAttribute("class","CSS-betmod-buttons")
    betMod20Button.setAttribute("class","CSS-active-betmod")
    betMod30Button.setAttribute("class","CSS-betmod-buttons")
    startButton.setAttribute("class","CSS-betbuttons")
    playerHand.innerHTML= "Player: ";
    dealerHand.innerHTML= "Dealer: ";
    newGameReady()
}

const newGameReady = () => {
    console.log("setting up new game")
    startButton.setAttribute("class","CSS-betbuttons")
    handStarted = false
    playerStaying = false
    dealerStaying = false
    gameFinished= true
    playerCount = 0
    dealerCount = 0
    playerCards = 0
    dealerCards = 0
    hitButton.removeEventListener("click",hit)
    startButton.addEventListener("click",startGame)
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

const play = (participant) => {
    if (gameFinished){
        return
    }
    let card = Math.round((Math.random() * 65535) % 12) + 1
    let participantId = participant.getAttribute("id")
    let tempCount = participantId == "CSS-dealerhand" ? dealerCount : playerCount
    if (card >= 10){
        if (card == 10){
            participant.innerHTML += "10 , "
        }else if (card == 11){
            participant.innerHTML += "J , "
        } else if (card == 12){
            participant.innerHTML += "Q , "
        }else if (card == 13){
            participant.innerHTML += "K ,  "
        } 
        participantId == "CSS-dealerhand" ? dealerCount +=10 : playerCount += 10
        console.log("finished hitting. dealercount: ",dealerCount," playercount: ",playerCount)
    } else {
        if (card == 1){
            if (tempCount + 11 == 21){
                participantId == "CSS-dealerhand" ? dealerCount +=11 : playerCount += 11
            }else{
                participantId == "CSS-dealerhand" ? dealerCount +=1 : playerCount += 1
            }
            participant.innerHTML += "A , "
        } else{
            participantId == "CSS-dealerhand" ? dealerCount += card : playerCount += card
            participant.innerHTML += card.toString() + " , "
        }
    }
    participantId == "CSS-dealerhand" ? dealerCards +=1 : playerCards += 1
    checkWinner()
}


const checkWinner= () => {
    if (playerCount > dealerCount && dealerStaying){
        if (playerCount > 21){
            playerHand.innerHTML = "Player: BUST!"
            money.innerHTML = money.innerHTML - currentBetModifier
            newGameReady()
        } else {
            playerHand.innerHTML = "Player: Winner!"
            money.innerHTML = Math.round(parseInt(money.innerHTML) + (currentBetModifier * 1.5))
            newGameReady()
        }
    }else if (playerCount == 21 && dealerCount == 21){
        playerHand.innerHTML = "TIE!"
        dealerHand.innerHTML = "TIE!"
        newGameReady()
    } else if (playerCount == 21){
        playerHand.innerHTML = "Player: BLACKJACK!"
        money.innerHTML = Math.round(parseInt(money.innerHTML) + (currentBetModifier * 1.5))
        newGameReady()
    } else if (dealerCount > 21){
        dealerHand.innerHTML = "Dealer: BUST!"
        money.innerHTML = Math.round(parseInt(money.innerHTML) + (currentBetModifier * 1.5))
        newGameReady()
    } else if (playerCount > 21) {
        playerHand.innerHTML = "Player: BUST!"
        money.innerHTML = money.innerHTML - currentBetModifier
        newGameReady()
    } else if (dealerCount == 21){
        dealerHand.innerHTML = "Dealer: BLACKJACK!"
        money.innerHTML = money.innerHTML - currentBetModifier
        newGameReady()
    }
}

const startGame = () => {
    playerHand.innerHTML= "Player: "
    dealerHand.innerHTML= "Dealer: "
    if (money.innerHTML < currentBetModifier || handStarted == true){
        return
    }
    gameFinished = false
    handStarted = true;
    startButton.setAttribute("class","CSS-start-greyedout")
    while (playerCards < 2){
        hit()
    }

    hitButton.addEventListener("click",hit)
    startButton.removeEventListener("click",startGame)
}

const hit = () => {

    play(playerHand)
    checkWinner()

    if (gameFinished == false){
        if (dealerCount > 18){
            dealerStaying = true
        } else if (dealerStaying == false) {
            play(dealerHand)
    }
}
}

startingState()
betMod10Button.addEventListener("click",() => setBetModifier(10))
betMod20Button.addEventListener("click",() => setBetModifier(20))
betMod30Button.addEventListener("click",() => setBetModifier(30))
reset.addEventListener("click",startingState)
startButton.addEventListener("click",startGame)

