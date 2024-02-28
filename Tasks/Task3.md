Module 2 - Task 1

Lights, Camera, Action! - Add Movie Details
Embark on the first task of Module 2 by creating the "Lights, Camera, Action!" POST endpoint "/addMovie". Your mission is to design a dynamic gateway for users to add new movie details to the system. The system ensures the validity of the input, checking for completeness and future scheduling. Errors are intelligently handled, providing clear messages in case of invalid inputs or scheduling conflicts.

Files to Use:

allController.js (controller/allController.js): Controller class with the /addMovie endpoint for adding movie details.
MovieService.js (service/MovieService.js): Service class responsible for saving movie details.
Steps to complete the task:

In your allController.js, use the route handler method with API endpoint /addMovie which receives the POST request along with the input JSON data of the movie according to the structure in the "movies" table to create the endpoint for adding movie details.
From the allController.js the input is sent to the method addMovie() in MovieService.js.
Utilize the addMovie() method in MovieService.js to handle the validation and saving of movie details.
Ensure that the provided movie information is complete and valid, checking for empty fields and non-positive availability.
Check if the movie date is in the future, preventing scheduling conflicts with current or past dates.
If the input passes validation, save the movie details to the "movies" table, completing the movie addition process.
Return a successful or failed response map to the specific route handler method in allController.js, representing the added movie.
Input:
Users send a POST request to /addMovie with a JSON object representing movie details.

{
"movieName": "Inception",
"showTime": "19:00",
"date": "2024-02-21",
"availability": 150
}

Output for Successful Addition:

{
"movieId": 1,
"movieName": "Inception",
"showTime": "19:00",
"date": "2024-02-21",
"availability": 150
}

Output for Invalid Movie Addition (Example - Past Date):

{
"success": false,
"message": "Ensure the movie date is in the future, as current or past dates are not allowed for scheduling."
}

Output for Invalid Movie Addition (Example - Incomplete Information):

{
"success": false,
"message": "Invalid movie information. Please check your inputs."
}

Congratulations on completing Task 1 of Module 2! By implementing the "Lights, Camera, Action!" endpoint, you've empowered users to contribute to the cinematic lineup. Your validation logic and error handling ensure the addition of accurate and future-dated movie details. This task sharpens your skills in creating dynamic endpoints, validating inputs, and maintaining data integrity. Get ready for the next thrilling task as our cinematic coding adventure continues!

Helpful Links:
To complete this task, knowledge of JavaScript and API is required. You can learn JavaScript and API using the following resources:

JavaScript - Beginner To Advanced Course
API - Beginner To Advanced Course
JavaScript Interview Q&A
JavaScript Coding Practice
