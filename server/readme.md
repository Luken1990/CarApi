Instructions to test api with postman:

1. Download postman
2. Open postman in your browser
3. Create a new workspace
4. Copy the following url: http://localhost:8080/api to view the data.

5. To add a new entry click on the drop down and change to POST:
   on the url bar paste the following URL: http://localhost:8080/api/course
   select body - raw and change type to JSON
   in the text box enter title, description and url values.
   then click sent

6. To delete an entry click on the dropdown and select DELETE:
   on the url bar paste the following URL: http://localhost:8080/api/course/id  
   (id you wish to delete i.e 1)
   click send

7. To get an entry click on the dropdown and select GET:
   on the url bar paste the following URL: http://localhost:8080/api/course/id  
   (id you wish to get i.e 1)
   click send

8. To change data in an input select PUT
   on the url bar paste the following URL: http://localhost:8080/api/course/id  
    (id you wish to make changes to)
   on the text body change the desired value or values
   click send
