Module 1 - Task 2

Retrieve Movie Enthusiasts - User Details API
In this engaging task, you're diving into the realm of user details retrieval by crafting the "Retrieve Movie Enthusiasts" GET endpoint "/getUser". Your mission is to create a GET request endpoint allowing users to fetch all registered users' details.

Files to Use:

allController.js (controller/allController.js): Controller class with the /getUser endpoint for fetching user details.
UserService.js (service/UserService.js): Service class responsible for retrieving user details.
Steps to complete the task:

In your allController.js, use the route handler method with the API endpoint "/getUser" which receives the GET request for retrieving all user from the "my_users" table.
From the allController.js file, the transfer of call is sent to the method getUser() in UserService.js.
In the UserService.js file under the method getUser() the "my_users" table is accessed and the list of users is fetched.
Upon successfully fetching the records, the response map is sent to the specific route handler method in allController.js.
The system checks if the list of users received in the allController.js file is empty. If there are no users in the database, it returns an error message stating that no user data was found.
If users are found, then the method route handler method in allController.js returns a JSON response containing the list of users' information.
Input:
Users send a GET request to /getUser.

Output:
If users are found, the response will be in the following format:

[
{
"userId": 1,
"name": "John Doe",
"username": "johnny123",
"email": "john.doe@example.com",
"date": "1999-02-14"
},
// Additional user details...
]

If no users are found, the response will be:

{
"success": false,
"message": "Users not found"
}

Congratulations on completing Task 2! By implementing the "Retrieve Movie Enthusiasts" endpoint, you've empowered users to explore a list of registered movie enthusiasts. This task enhances your skills in creating user-friendly endpoints, ensuring efficient retrieval of data, and providing informative responses. As we continue our cinematic coding adventure, you're now ready to tackle the next exciting task!

Helpful Links:
To complete this task, knowledge of JavaScript and API is required. You can learn JavaScript and API using the following resources:

JavaScript - Beginner To Advanced Course
API - Beginner To Advanced Course
JavaScript Interview Q&A
JavaScript Coding Practice
