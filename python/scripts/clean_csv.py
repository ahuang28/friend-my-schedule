import pandas as pd 
import csv 
from pathlib import Path   

def main():
    #Read the csv file, remove the first collumn, drop all lines that dont have values 
    df = pd.read_csv(Path(__file__).parent.parent / Path("data/output.csv"))
    df = df.drop(df.columns[0], axis=1)
    df = df.dropna()
    df = df.drop(['Credits/CE Units','Cap','Act','Rem','WL Cap','WL Act','WL Rem','Status','Date (MM/DD)'], axis=1)
    #Save the csv file
    df.to_csv(Path(__file__).parent.parent / Path("data/clean_output.csv"), index=False)
    print("Done")
    
if __name__ == '__main__':
    main()  