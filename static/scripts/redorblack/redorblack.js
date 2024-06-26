const money = document.querySelector("#money");
const streak = document.querySelector("#winstreak");
const betRed = document.querySelector("#CSS-red");
const betBlack = document.querySelector("#CSS-black");
const reset = document.querySelector("#CSS-resetgame");
const result = document.querySelector("#CSS-gambling-result")
const startingCash= 100;


const startingState = () => {
    result.innerHTML= "Ready!"
    result.setAttribute("class","");
    money.innerHTML = startingCash;
    streak.innerHTML = 0;
}

const bet = (x) => {
    const roll = Math.round(Math.random())
    const winner = roll === 1 ? "Red" : "Black";
    
    if (parseInt(money.innerHTML) == 0){
        result.innerHTML = "You Lose!"
        return
    }
    const classStyling = winner === "Red" ? "CSS-result-red" : "CSS-result-black"
    result.innerHTML= winner;
    result.setAttribute("class",classStyling)
    if (x === winner){
        money.innerHTML = Math.round(money.innerHTML * 1.5);
        streak.innerHTML = parseInt(streak.innerHTML) + 1;
    } else{
        if (parseInt(money.innerHTML) == 1){
            result.innerHTML = "You Lose!"
            result.setAttribute("class","CSS-result-red")
            money.innerHTML = 0;
        } else{
            money.innerHTML = Math.floor(money.innerHTML / 2);
            streak.innerHTML = 0;
        }
    }
}

startingState()
reset.addEventListener("click",() => {startingState()});
betRed.addEventListener("click", () => {bet("Red")});
betBlack.addEventListener("click", () => {bet("Black")});