Module 2 - Task 2

Roll the Reel - Retrieve Movie Details API
Step into the second task of Module 2 by creating the "Roll the Reel" GET endpoint "/getMovie". Your mission is to design a GET request mechanism that allows users to retrieve a list of all available movie details from the system. The endpoint intelligently handles cases where no movies are found, providing a clear message and a 404 status in such instances.

Files to Use:

allController.js (controller/allController.js): Controller class with the /getMovie endpoint for retrieving movie details.
MovieService.js (service/MovieService.js):Service class responsible for retrieving movie details.
Steps to complete the task:

In allController.js, implement the route handler method with the GET endpoint /getMovie to create the endpoint for retrieving movie details.
Utilize the getMovie() method in MovieService.js to fetch all available movie details from the "movies" table.
Check if the retrieved list of movies is empty. If empty, return an informative response with a "Movies not found" message.
If movies are found, return a successful response with the list of movie details.
Input:
Users send a GET request to /getMovie.

Output:
If movies are found, the response will be in the following format:

[
{
"movieId": 1,
"movieName": "Inception",
"showTime": "19:00",
"date": "2024-02-21",
"availability": 150
},
// Additional movie details...
]

Output for Empty Movie List:

{
"success": false,
"message": "Movies not found"
}

Congratulations on completing Task 2 of Module 2! By implementing the "Roll the Reel" endpoint, you've provided users with a gateway to explore the entire cinematic lineup. The task showcases your ability to create effective GET request endpoints, ensuring a smooth retrieval process and handling scenarios where no movies are found. This achievement adds to your repertoire as we continue our cinematic coding adventure. Get ready for more thrilling tasks ahead!

Helpful Links:
To complete this task, knowledge of JavaScript and API is required. You can learn JavaScript and API using the following resources:

JavaScript - Beginner To Advanced Course
API - Beginner To Advanced Course
JavaScript Interview Q&A
JavaScript Coding Practice
