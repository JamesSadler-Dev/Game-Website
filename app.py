from flask import Flask,render_template,request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/clicker")
def clicker():
    return render_template("clicker.html")

@app.route("/redorblack")
def red_or_black():
    return render_template("redorblack.html")