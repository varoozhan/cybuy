from pymongo import *
import json

def create_cpe(v, p):
    ret_val: str = 'cpe:2.3:.:{vendor}:{part}:*:*:*:*:*:*:*:*' \
        .format(vendor=v, part=p).lower()
    return ret_val

def search_db(user_input):
    client = MongoClient(r'mongodb://127.0.0.1:27017/?directConnection=true')
    db = client['local']
    nvd_collection = db['nvdCollection']

    # cpe = create_cpe(user_input["manufacturer"], user_input["device"])

    cpe = create_cpe(user_input["vendor"], user_input["device"])
    nvd_queries = [
                    # "configurations.nodes.children.cpe_match.cpe23Uri",
                   # "configurations.nodes.children.cpe_match",
                   "configurations.nodes.cpe_match.cpe23Uri",
                   # "configurations.nodes.cpe_match"
                   ]
    nvd_results = []
    for query in nvd_queries:
        nvd_query_form = {query: {"$regex": cpe}}
        nvd_results.extend(nvd_collection.find(nvd_query_form))
    # print(nvd_results)
    # for each_result in nvd_results:
    #     print(type(each_result))
    #     print()
        # break

    print("You hit search_db")
    return {"result": nvd_results}
