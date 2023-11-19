#Some code to generate a bunch of users for testing purposes
import random 
import json 

first_name = ['Emmanuel Macron', 'Angela Merkel', 'Justin Trudeau', 'Theresa May', 'Donald Trump']
email = '' 
password = 'password'
years = [0,1,2,3,4]
majors = ['Accounting', 'Finance', 'Management', 'Marketing']
classes = ['ACCT 351','ACCT 352','ACCT 361','ACT 451','FINE 342','FINE 434','FINE 441','MGCR 211','MGCR 222','MGCR 250']
interests = ['Gaming', 'Sports', 'Music', 'Movies', 'Reading', 'Travel', 'Food', 'Art', 'Photography', 'Fashion', 'Fitness', 'Dance', 'Cooking', 'Writing', 'Shopping', 'Cars', 'Politics', 'Science', 'Technology', 'Animals', 'Nature', 'Outdoors', 'Volunteering', 'Religion', 'Family', 'Friends', 'Partying', 'Drinking', 'Smoking', 'Drugs']

list_of_users = []

def main():
    for i in range(5):
        name = first_name[i] 
        email = first_name[i].lower().replace(' ','') + '@example.com'
        year = random.choice(years)
        major = random.choice(majors)
        classses = random.sample(classes,5)
        interest = random.sample(interests,5)
        dictt = {'name': name,'email': email, 'password': password, 'year': year, 'major': major, 'classes': classses, 'interests': interest}
        list_of_users.append(dictt)
    
    print(json.dumps(list_of_users, indent=4, sort_keys=True))
    
if __name__ == '__main__':
    main()