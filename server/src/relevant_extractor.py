
def relevant_extractor(result_json):
    Total = 0

    for each_result in result_json["result"]:
        base_score = each_result["impact"]["baseMetricV3"]["cvssV3"]["baseScore"]
        Total = Total + base_score

    return Total, len(result_json["result"])