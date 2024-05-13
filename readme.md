<h1>GAME WEBSITE</h1>

<h2>A clicker game made in JS,CSS,HTML with a Python Flask backend.<br>This game is upgradeable to build whatever you want!</h2>

Usage: 

1.install dependencies with python poetry

`poetry install`

2.set up javascript dependencies and dev dependencies

`npm install`

3.run server with python flask

`poetry run python -m flask run`


<h2>Useful Functions to build your own game</h2>

`buy()`- A function to be called in an event listener of a buy button.
this takes in the current count of this property, the element containing properties price, and the rate of money to increment by.
```js
farmBuy.addEventListener("click", () => {
    buy(farmCount, farmPriceEle, 1); //adds a farm to farmPriceEle and increments money rate by 1
});
```
<hr><br>

```savegameState()``` - this function should be overridden in order to save state of any features added to your game.

```js
const saveGameState = () => {
    localStorage.setItem('money', moneyElement.innerHTML);
    localStorage.setItem('farmCount', farmCount.innerHTML);
    localStorage.setItem('factoryCount', factoryCount.innerHTML);
    localStorage.setItem('farmPrice', farmPriceEle.innerHTML);
    localStorage.setItem('factoryPrice', factoryPriceEle.innerHTML);
    localStorage.setItem("robotsCount",robotCount.innerHTML); //Adding our own custom property type
    localStorage.setItem("robotsPrice",robotPrice.innerHTML); //Don't forget to save their price.
    localStorage.setItem('secondProfit', secondProfit);
};
```