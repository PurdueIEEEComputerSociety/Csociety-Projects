from flask import Flask, jsonify, request, render_template, flash, session, redirect, abort
from flask_cors import CORS
import requests
import json

app = Flask(__name__)
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
        return jsonify({'result':True})
    return jsonify({'result':False})
