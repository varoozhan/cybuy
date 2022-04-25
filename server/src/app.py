from main import run_cybuy
from flask import Flask, request, jsonify, redirect, url_for, render_template
from flask_cors import CORS
import json
from bson.json_util import loads, dumps


def create_app():
    app = Flask(__name__)
    CORS(app)
    return app

app = create_app()

# @app.route("/data")
# def entries():
#     # print("You Are Running Server", result())
#     result_json = run_cybuy({"vendor":"apple", "product":"iphone", "email":"vhartoon@usc.edu", "1":"yes", "2":"no", "3":"yes"})
#     # print("From Server: ", result_json)
#     print(type((result_json)))
#     print("----------------")
#
#     # return jsonify(result_json)
#     return dumps((result_json))


@app.route('/product_selection', methods = ['POST'])
def product_selection():
    input = request.json
    # print(input)
    result_json = run_cybuy(input)
    response = jsonify(json.loads(dumps(result_json)))

    return response
    # return redirect(url_for('result'))


@app.route("/result", methods=['GET', 'POST'])
def result():
    rslt = request.form.get('data')
    if(request.method == 'Post'):
        print(rslt)
    else:
        return f"<div>{0}</div>"

if __name__ == "__main__":
    app.run(debug=True)