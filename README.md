# friend_finder
Node and Express Servers Homework Assignment 

Objective is to build full-stack Friend Finder application which evaluates a 10 question survey and match compatability by comparing each questions variance with the pool of friends.

The low value variance from each question comparison is added to a running sum.  The lowest total variance results in the best match which is then displayed on the survey html page as a modal.  

The pool data of friends is also populated by each survey participant.  

Final applicationw will be deployed to Heroku.

Testing and Evaluation of the application

2 Entries in the friends.js export file have the same score for each survey question.

Entry of 5 for each question should result with Laura Eliza as the best match.

Entry of 1 for each question should result in Jaxie Payne as the best match. 

Required npm packages:

    express
    path

Custom javascript and css is included within the survey.html page 