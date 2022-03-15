from flask import render_template, request, redirect, url_for, abort
from . import main
# from .forms import exampleForm
from flask_login import login_required, current_user




@main.route('/')
def index():
    message = 'Hello Amani'
    return render_template('index.html', message=message)

