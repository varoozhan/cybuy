import requests

def store_user_inputs(user_input, total_average):
    user_input["score_average"] = total_average
    print(type(user_input))
    r = requests.put("https://dsci551-7fa70-default-rtdb.firebaseio.com/user_input.json", params=user_input)
    print(r.ok)