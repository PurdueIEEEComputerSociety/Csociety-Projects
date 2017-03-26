from flask import Flask, jsonify, request, url_for, send_from_directory, render_template, flash, session, redirect, abort
import requests
from werkzeug.utils import secure_filename
import os
app = Flask(__name__)
UPLOAD_FOLDER = '/Users/sidshah/Desktop/sandbox/swe/Csociety-Projects/restapi/app/memes/'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
app.config['ALLOWED_EXTENSIONS'] = ALLOWED_EXTENSIONS
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in app.config['ALLOWED_EXTENSIONS']

@app.route("/")
def hello():
    return "Welcome to Code Cafe JSON Area!"

@app.route("/testJSON", methods = ['POST','GET'])
def testRequest():
	if request.method == "POST":
		return jsonify({'result':True, 'Message':'You found me'})
	return jsonify({'result':False,'Message':'Try Again'})

@app.route("/upload", methods = ['POST'])
def uploadFile():
    # Get the name of the uploaded file
    file = request.files['file']
    print file
    # Check if the file is one of the allowed types/extensions
    if file and allowed_file(file.filename):
        # Make the filename safe, remove unsupported chars
        filename = secure_filename(file.filename)
        filename = randName() + filename
        # Move the file form the temporal folder to
        # the upload folder we setup
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        # Redirect the user to the uploaded_file route, which
        # will basicaly show on the browser the uploaded file
        return redirect(url_for('uploaded_file',filename=filename))
    return jsonify({'result':False, 'Message':'Wrong files!'})

def randName():
    import string
    import random

    N = 6
    return(''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits + string.ascii_lowercase) for _ in range(N)))


@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'],
                               filename)
