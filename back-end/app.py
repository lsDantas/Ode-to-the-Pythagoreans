from flask import Flask, request
from flask.json import jsonify

from flask_cors import CORS

from flask_expects_json import expects_json

import math

app = Flask(__name__)
CORS(app)

# Input Validation 
triangle_schema = {
    "type": "object",
    "properties": {
        "base": {
            "type": "number",
            "exclusiveMinimum": 0
        },
        "height": {
            "type": "number",
            "exclusiveMinimum": 0
        }
    },
    "required":["base", "height"]
}

# Routing
@app.route("/calculate-hypothenuse", methods=["POST"])
@expects_json(triangle_schema)
def calculateHypothenuse():
    request_data = request.get_json()

    base = request_data["base"]
    height = request_data["height"]

    hypothenuse = math.sqrt(base**2 + height**2)

    response = {
        "base": float(base),
        "height": float(height),
        "hypothenuse": hypothenuse
    }
    return jsonify(response)
