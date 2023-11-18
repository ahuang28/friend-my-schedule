import json
import numpy as np
import pandas as pd
from sklearn.metrics import jaccard_score
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
import sys 


def main():
    
    if len(sys.argv) != 3:
        print("Usage: python match.py <user json> <json string> ")
        sys.exit(1)
        
    reference_id = sys.argv[1]
    
    data = json.loads(sys.argv[2])
    

    # Convert data to a list of strings for vectorization
    
    reference_index = next(i for i, i_d in enumerate(data) if i_d["_id"] == reference_id)

    corpus = [' '.join(person['classes'] + person['interests']) for person in data]

    
    # Vectorize the data using CountVectorizer
    vectorizer = CountVectorizer()
    X = vectorizer.fit_transform(corpus)

    # Calculate Cosine Similarity Matrix
    cosine_similarity_scores = cosine_similarity(X[reference_index], X)[0]

    
    ids = [i_d["_id"] for i_d in data]
    
    cosine_df = pd.DataFrame(cosine_similarity_scores, index=ids, columns=["Similarity"])
    cosine_df = cosine_df[cosine_df.index != reference_id] #remove reference i_d from dataframe


    # Sort DataFrame by similarity score in descending order
    cosine_df = cosine_df.sort_values(by="Similarity", ascending=False)
    

    cosine_similarity_list = [{"id": i_d,"value": score} for i_d, score in cosine_df.itertuples(name=None)]
    
    
    print(json.dumps(cosine_similarity_list, indent=4))
    
if __name__ == '__main__':
    main()