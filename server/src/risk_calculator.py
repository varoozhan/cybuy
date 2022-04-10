
def risk_calculator(average_db_score, user_input):
    total_average = (user_input["yes"]+average_db_score)/2
    user_input["score_average"] = round(total_average, 3)
    return user_input
