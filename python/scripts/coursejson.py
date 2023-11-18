import json 
import pandas as pd 
from pathlib import Path

def main():
    #convert the csv file to a json file
    csvFilePath = Path(__file__).parent.parent / Path("data/clean_output.csv")
    jsonFilePath = Path(__file__).parent.parent / Path("data/courses.json")
    
    df = pd.read_csv(csvFilePath)
    
    df = df[['Subj','Crse']]
    
    grouped_data = df.groupby('Subj')['Crse'].apply(list).reset_index()
    result_dict = grouped_data.set_index('Subj')['Crse'].to_dict()
    
    
    json.dump(result_dict, open(jsonFilePath, 'w'), indent=4)
    
    

if __name__ == '__main__':
    main()