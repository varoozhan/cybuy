import requests
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


def store_user_inputs(user_input):
    if not firebase_admin._apps:
        cred = credentials.Certificate(r"C:\Users\varoo\.ssh/dsci551-7fa70-firebase-adminsdk-ggigc-b79b61da14.json")
        firebase_admin.initialize_app(cred)
    db = firestore.client()

    db.collection("users").document(user_input["email"]).set(user_input)

    '''
    Add another key to temp_dict called metadata and keep info about the list, such as its length, average of its scores
    , etc. then you can retrieve info quickly and do more calculations.
    '''
    # temp_dict = {"list":[]}
    # if(db.collection("users").document(user_input["email"]).get().exists):
    #     temp_list = db.collection("users").document(user_input["email"]).get().to_dict()["list"]
    #     temp_list.values()
    #     temp_list.append(user_input)
    #     temp_dict["list"] = temp_list
    #     db.collection("users").document(user_input["email"]).set(temp_dict)
    #
    # else:
    #     temp_dict["list"] = [user_input]
    #     db.collection("users").document(user_input["email"]).set(temp_dict)


    # print(type(user_input))
    # r = requests.put("https://dsci551-7fa70-default-rtdb.firebaseio.com/" + user_input["email"] + ".json", json=user_input)
    # print(r.status_code)
