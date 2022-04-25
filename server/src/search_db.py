from pymongo import *

def create_cpe_version(v, p, ver):
    ret_val: str = 'cpe:2.3:.:{vendor}:{part}:{version}:*:*:*:*:*:*:*' \
        .format(vendor=v, part=p, version=ver).lower()
    return ret_val

def create_cpe(v, p):
    ret_val: str = 'cpe:2.3:.:{vendor}:{part}:*:*:*:*:*:*:*:*' \
        .format(vendor=v, part=p).lower()
    return ret_val

def search_db(user_input):
    client = MongoClient(r"mongodb+srv://varo:r1C09Edx0Zg1hVle@cluster0.lvyin.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    # client = MongoClient(r'mongodb://127.0.0.1:27017/?directConnection=true')
    db = client['vulnerabilities']
    nvd_collection = db['nvdCollection']

    # cpe = create_cpe(user_input["manufacturer"], user_input["device"])
    if(user_input["version"]):
        cpe = create_cpe_version(user_input["vendor"], user_input["device"], user_input["version"])
    else:
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

    # print(len(nvd_results))
    return {"result": nvd_results}
