from flask import Flask, render_template

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


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5147)