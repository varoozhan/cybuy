from pymongo import MongoClient
# from src.algo_config import client_name
import os
import json

# pprint library is used to make the output look more pretty
from pprint import pprint

# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
# client = MongoClient(r"mongodb://127.0.0.1:27017/?directConnection=true")
client = MongoClient(r"mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false")
db = client['local']
collection = db["nvdCollection"]

dirname = os.path.dirname(__file__)
path = os.path.join(dirname, "nvd_files")
nvd_files = [
    # "2002",
    # "2003",
    # "2004",
    # "2005",
    # "2006",
    # "2007",
    # "2008",
    # "2009",
    # "2010",
    # "2011",
    # "2012",
    # "2013",
    # "2014",
    # "2015",
    # "2016",
    # "2017",
    # "2018",
    # "2019",
    # "2020",
    "2021",
    "2022",
    # "modified",
    # "recent",
]
for each_file in nvd_files:
    fileName = os.path.join(path, r"nvdcve-1.1-" + each_file + ".json").replace(
        "\\", "/"
    )

    with open(fileName, encoding="utf-8") as json_file:
        data = json.load(json_file)
        entries = data["CVE_Items"]
        for entry in entries:
            collection.insert_one(entry)
