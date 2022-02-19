from search_db import search_db
def run_cybuy(user_input):

    # Search NVD using vendor and product
    nvd_entries = search_db(user_input)
    # # Extract relevant infor from the entries that were returned by search_db
    # relevant_info = relevant_extractor(nvd_results)
    # # Algorithm to calculate the score
    # score = risk_calculator(relevant_info, user_input)
    # # Store the user input into the database
    # analysis_info = db_store(user_input, score)
    # # A general analysis of the database like returning a summary statistics or smth.
    # final_result = general_analysis(analysis_info)
    # # send the final result to the front end
    # send_result(final_result)

def main():
    """
    Examples of how to run this script on shell.
    """
    run_cybuy({"vendor":"apple", "product":"iphone", "email":"vhartoon@usc.edu", "1":"yes", "2":"no", "3":"yes"})
    # run_cybuy("apple", "ipad")
    # run_cybuy("apple", "iphone")



if __name__ == "__main__":
    main()