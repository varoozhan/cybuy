# from scripts.populate_mongodb import *
from main import run_cybuy
from flask import Flask, request, jsonify, redirect, url_for, render_template
from flask_pymongo import PyMongo, ObjectId,BSONObjectIdConverter
from flask_cors import CORS
from pymongo import *
import json
from bson.json_util import loads, dumps


def create_app():
    app = Flask(__name__)
    # app.config['MONGO_URI']= 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
    # PyMongo(app)
    # mongo = PyMongo(app)
    CORS(app)
    # db= mongo.db
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
    # if(request.method == "POST"):
    input = request.json
    result_json = run_cybuy({"vendor": input["vendor"], "device": input["device"], "email": input["email"]})
    response = jsonify(json.loads(dumps(result_json)))

    # response.headers.add('Access-Control-Allow-Origin', '*')

    # print(type(json.loads(dumps(result_json))))
    print(type(response))
    # return redirect(url_for("result", data=dumps(result_json["result"][0]["_id"])), code=307)
    return response
    # return result_json


    # else:
    #     print("asfasdf")
    #     return redirect(url_for('result'))




        # return redirect(url_for('result'))
    # if(request.method == "GET"):
    # result_json = run_cybuy({"vendor":input["vendor"], "device":input["device"], "email":input["email"]})
    # if (request.method == "GET"):

    # print(input)
    # print(result_json)

    # return dumps(result_json)
@app.route("/result", methods=['GET', 'POST'])
def result():
    # return render_template("/result")
    rslt = request.form.get('data')
    if(request.method == 'Post'):
          # counterpart for url_for()
        print(rslt)
    else:
        return f"<div>{rslt}/div>"
    # if player_id:
    #    data = get_player(player_id)
    #    name = str(data['name'][0])
    #    return jsonify(name)
    # return input

if __name__ == "__main__":
    app.run(debug=True)