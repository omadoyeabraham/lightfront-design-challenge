# Lightfront Full Stack Design Challenge by Omadoye Abraham



## RUNNING THE APPLICATION


> For ease of deployment and testing, the API and UI for this design challenge have been dockerized. Ensure that you have [docker](https://docker.com) installed on the system where this code is to be tested.


1. Clone the repository using 
 ```
 git clone https://github.com/omadoyeabraham/lightfront-design-challenge.git && cd lightfront-design-challenge
 ```      


2. Spin up the docker containers using 
 ```
 docker-compose up
 ``` 
   This sets a Python api used for web scraping and a React ui to display the rank over time graph     

3. The API can be accessed locally @ [http://localhost:105](http://localhost:105)  
   
4. The UI can be accessed locally @ [http://localhost:8081](http://localhost:8081)  
5. A quick test of the API functionality can be done using a URL like [http://localhost:105/amazon-keyword-page-rank?keyword=headphones&product_id=B079B54QM2](http://localhost:105/amazon-keyword-page-rank?keyword=headphones&product_id=B079B54QM2) .    
    You can replace the keyword and product_id paramters if needed.  



## Testing the Backend script  
  

In order to test the backend script, please follow the steps outlined below.

1. After cloning the repository and spinning up the docker containers as detailed above, open a new terminal and navigate to the root of the repository.
2. Move into the api directory using `cd api`
3. A sample `input.csv` file has been provided. You can edit it and use for testing or provide your own file when testing
4. Run the following command to execute the script command inside the api docker container, (this is done so you can utilize the chrome and selenium drivers already setup in the docker api container for web scraping).  
      

   ``` 
   docker-compose exec api bash
    ```

5. Once you're in the docker container, you can test the api script using:
     
     ```
     python amazon-page-rank.py input.csv output.csv
     ```

     Where `input.csv` is the name of your input csv file with the keywords and productID, and output.csv is the path to a csv file that you want the output of the backend script to the written to.
