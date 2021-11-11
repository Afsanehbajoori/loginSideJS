from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/next')
def next():
    return render_template('next.html')
    # return render_template('greeting.html', say=request.form['say'], to=request.form['to'])

if __name__ == "__main__":
    app.run(debug=True) 