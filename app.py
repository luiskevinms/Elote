from flask import Flask, render_template, request
from entities.palindrome import Palindrome
from entities.money import Money
from entities.animal import Animal
import random

from entities.suerte import Suerte

app = Flask(__name__)

#Esta será la ruta index (de la página principal)
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/math')
def math():
    return render_template('math.html')

@app.route('/azulejos')
def azulejos():
    return render_template('azulejos.html')

@app.route('/palindrome', methods=['GET', 'POST'])
def palindrome():
    if request.method == 'POST':
        phrase = request.form.get('input-phrase', '')

        p = Palindrome(phrase)
        result = p.is_palindrome()
        return render_template('result.html', resultado = result)


    return render_template('palindrome.html')

@app.route('/money', methods=['GET', 'POST'])
def money():
    if request.method == 'POST':
        pesos = request.form.get('input-money', '')
        m = Money(pesos)
        result = m.is_money()
        return render_template('resultmoney.html', resultado = result)
    
    return render_template('money.html')

@app.route('/animals')
def animals():
    return render_template('animals.html', animals = Animal.get_list())

@app.route('/suerte', methods=['GET', 'POST'])
def suerte():
    if request.method == 'POST':
        numero = request.form.get('input-value1', '0')
        numero2 = request.form.get('input-value2', '0')
        numero3 = request.form.get('input-value3', '0')
        n = Suerte(numero, numero2, numero3)
        result = n.is_onetohundred()
        return render_template('resultsuerte.html', resultado = result)  
    return render_template('suerte.html')



if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5090)