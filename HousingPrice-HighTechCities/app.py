import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/visualization")
def visual():
    return render_template("visual.html")

@app.route("/visualization2")
def visual2():
    return render_template("visual2.html")




if __name__ == "__main__":
    app.run()
