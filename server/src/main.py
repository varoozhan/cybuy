from search_db import search_db
from relevant_extractor import relevant_extractor
from risk_calculator import risk_calculator
from store_user_inputs import store_user_inputs

def run_cybuy(user_input):
    # Search NVD using vendor and product
    nvd_entries = search_db(user_input)
    # Extract relevant info from the entries that were returned by search_db
    total, length = relevant_extractor(nvd_entries)
    # Algorithm to calculate the score
    updated_user_input = risk_calculator(total, length, user_input)
    # Store the user input into the database
    store_user_inputs(updated_user_input)
    # A general analysis of the database like returning a summary statistics or smth.
    # final_result = analytics(analysis_info)

    return updated_user_input


def main():
    """
    Examples of how to run this script on shell.
    """
    run_cybuy({"vendor":"apple", "product":"iphone", "email":"vhartoon@usc.edu", "1":"yes", "2":"no", "3":"yes"})
    print("You Are Running Main")


if __name__ == "__main__":
    main()