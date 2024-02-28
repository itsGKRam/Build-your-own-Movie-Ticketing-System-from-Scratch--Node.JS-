Module 1 - Task 1

Sign Up for Movie Magic!
Perform the following tasks before API development:

Download the MySQL database by clicking on the provided link. BookMovie.sql
Access your database information by clicking here
Configure your database connection in the "db.js" file, specifying the database name, username, and password.
To set up the downloaded database in your database environment:
In the "DB" tab, select "localhost" and enter your username and password.
Go to the "Import" section, select the downloaded schema file, and click "GO."
In this exciting task, you're diving into the action by creating the "Sign Up for Movie Magic" POST endpoint "/addUsers". Your mission is to design a secure gateway for users to register and join the cinematic adventure. Your goal is to enhance this endpoint by implementing logic to validate user input, ensuring that names, usernames, emails, and passwords meet the required criteria. The system should intelligently handle errors, providing informative responses in case of invalid inputs or existing usernames/emails.

Files to Use:

allController.js (controller/allController.js): Controller class with the /addUsers endpoint for user registration.
UserService.js (service/UserService.js): Service class responsible for user registration logic.
Steps to complete the task:

In your allController.js, use the route handler method with API endpoint "/addUsers" which receives the POST request along with the input JSON data of the user according to the structure in "my_users" table.
From the allController.js the input is sent to the method addUsers() in UserService.js.
The system ensures if the input data is incomplete (any of the fields is empty or null), the endpoint returns an error message representing bad request indicating that the user information is incomplete.
Afterward, it verifies that the user's name must exceed 4 characters in length and should not include any numerical digits. If the provided name does not meet these criteria, an error message stating that the name should have a minimum length of 4 characters and must not contain any digits.
Additionally, it validates the user's username, requiring it to be longer than 5 characters. In case the provided username falls short of this requirement, an error message is dispatched, explicitly stating that the username must have a minimum length of 5 characters.
Next, it ensures the validity of the provided email by checking its format. If the email does not meet the required format, an error is triggered with the message stating, "The email provided is not valid."
Verify that the provided password is at least 8 characters long and contains at least one numeric digit. If the password fails to meet these criteria, an error is raised, emphasizing that the password should be greater than or equal to 8 characters and must contain at least one digit.
Confirm that the chosen username does not already exist in the "my_users" table. If the username is already taken, an error is triggered, advising the user to select a different and unique username.
Examine whether the provided email is already associated with an existing user in the"my_users"table. If an email duplication is detected, an error is thrown, notifying the user that the email is already in use by another account.
If all the above checks pass successfully, save the user's registration details in the "my_users" table completing the user registration process.
Return a successful or failed response map to the specific route handler method in allController.js, representing the created user.
Return a JSON response from allController.js with detailed information about the newly registered user.
Input:
A JSON object representing a user with the following attributes:

{
"name": "John Doe",
"username": "johnny123",
"email": "john.doe@example.com",
"date": "1999-02-14",
"password": "SecurePass123"
}

Output:
Upon successful validation the user registration is successful and stored in the "my_users" table the endpoint returns a JSON object representing the registered user:

{
"userId": 1,
"name": "John Doe",
"username": "johnny123",
"email": "john.doe@example.com",
"date": "1999-02-14"
}

Output for Invalid User Registration (Example - Short Password):

{
"success": false,
"message": "The password should be greater than or equal to 8 characters and must contain at least one digit."
}

Output for Invalid User Registration (Example - Duplicate Username):

{
"success": false,
"message": "Username already taken. Please choose another username."
}

Output for Invalid User Registration (Example - Duplicate Email):

{
"success": false,
"message": "Email already used by another user."
}

Congratulations on completing Task 1! By fortifying the "Sign Up for Movie Magic" endpoint, you've ensured a secure and user-friendly gateway for new adventurers. Your validation logic and error handling make the registration process robust and informative. This task hones your skills in handling user input, ensuring data integrity, and providing a seamless registration experience for future movie enthusiasts. Onward to the next thrilling task in our cinematic coding adventure!

Helpful Links:
To complete this task, knowledge of JavaScript and API is required. You can learn JavaScript and API using the following resources:

JavaScript - Beginner To Advanced Course
API - Beginner To Advanced Course
JavaScript Interview Q&A
JavaScript Coding Practice
