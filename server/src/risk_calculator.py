
def risk_calculator(average_db_score, user_input):
    total_average = (0.4*user_input["yes"]+0.6*average_db_score)
    user_input["score_average"] = round(total_average, 3)
    return user_input
