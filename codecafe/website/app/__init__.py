from flask import Flask, jsonify, request, render_template, flash, session, redirect, abort
from flask_cors import CORS
import requests
import json
import csv

app = Flask(__name__)
app.secret_key = 'Tq123asdlqiw1093uamp19'
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/signup')
def signUp():
    return render_template('signup.html')

@app.route('/launchIDE')
def ideLaunch():
    return render_template('ccIDE.html')

@app.route('/postSignupInfo', methods = ['POST'])
def postSignup():
    if request.method == 'POST':
        data = json.loads(request.data.decode())
        session['name'] = data['name']
        session['email'] = data['email']
        with open('./allData.csv','ab') as f:
            w = csv.DictWriter(f, data.keys())
            # w.writeheader()   #toggle this on when running for the first time
            w.writerow(data)
        return jsonify({'result':True,'error':"Test"})
    return jsonify({'result':False})

@app.route('/skillPage')
def loadSkills():
    if not session.get('name') or not session.get('email'):
        return redirect('/')
    return render_template('skillsPage.html', name = session['name'], email = session['email'])

@app.route('/skillsSubmit', methods = ['POST'])
def saveSkills():
    if request.method == 'POST':
        data = json.loads(request.data.decode())
        saveData = {}
        saveData['email'] = session['email']
        saveData['skills'] = data
        with open('./skillData.csv', 'ab') as f:
            w = csv.DictWriter(f, saveData.keys())
            # w.writeheader()
            w.writerow(saveData)
        return jsonify({'result' : True})
    return jsonify({'result' : False})

@app.route('/thankSignup')
def thankSu():
    tempName = session['name']
    # session.pop('name', None)
    # session.pop('email', None)
    return render_template('thankSup.html', name = tempName)

@app.route('/qrGen')
def genQR():
    return jsonify({'result' : False})

@app.route('/memeCompetition')
def storeMeme():
    return jsonify({'result' : False})
