from flask import Flask
from flask_restful import Api
import os

app = Flask(__name__)
api = Api(app)


@app.route("/man/<string:command>", methods=["GET"])
def index(command: str):
    return os.popen("man {}".format("ls"))
