from flask import Flask,render_template,request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/clicker")
def clicker():
    return render_template("games/clicker.html")

@app.route("/redorblack")
def red_or_black():
    return render_template("games/redorblack.html")

@app.route("/pickanumber")
def pick_a_number():
    return render_template("games/pickanumber.html")

@app.route("/twentyone")
def twentyone():
    return render_template("games/twentyone.html")
