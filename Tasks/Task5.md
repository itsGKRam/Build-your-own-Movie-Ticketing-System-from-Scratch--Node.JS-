Module 3 - Task 1

Blockbuster Booking - Movie Ticket Reservation
Embark on the first task of Module 3, creating the "Blockbuster Booking" POST endpoint "/book/:movieId/numberOfTickets". Your mission is to design a secure gateway that allows users to reserve movie tickets dynamically. The system ensures the validity of the input, checking for the existence of the user, available tickets, and limiting the maximum tickets per booking.

Files to Use:

allController.java (controller/allController.js): Controller class with the /book/:movieId/numberOfTickets endpoint for booking movie tickets.
MovieTicketService.js (service/MovieTicketService.js): Service class responsible for booking movie tickets.
Steps to complete the task:

In allController.js, implement the toute handler method with the POST endpoint /book/:movieId/numberOfTickets method for booking movie tickets.
Utilize the bookTickets() method in MovieTicketService.js to handle the validation and booking of movie tickets.
Check for the validity of inputs, ensuring that the user ID is provided, the number of tickets is positive, the user with userId and the movie with movieId exists in the "my_users" and the "movies" table respectively.
Retrieve user details based on the provided user ID.
Ensure that the number of tickets per booking does not exceed the maximum limit (e.g., 5 tickets).
Check the availability of tickets for the specified movie and update the availability after successful booking.
Save the booking details to the "movie_ticket" table, completing the ticket reservation process.
Return a successful or failed response map to the specific route handler method in allController.js, representing the booked tickets.
Input:
Users send a POST request to /book/{movieId}/numberOfTickets with a JSON object representing the booking details.

Example: /book/1/numberOfTickets (where movie id is give as path variable to the input)

{
"userId": 1,
"numberOfTickets": 3
}

Output for Successful Booking:

{
"movieTicketId": 1,
"userId": 1,
"movieId": 1,
"numberOfTickets": 3
}

Output for Invalid Booking (Example - Maximum Tickets Exceeded):

{
"success": false,
"message": "Tickets failed to book. Number of tickets exceeds the maximum limit."
}

Output for Invalid Booking (Example - Movie Not Found):

{
"success": false,
"message": "Tickets failed to book. Movie not found."
}

Congratulations on completing Task 1 of Module 3! By implementing the "Blockbuster Booking" endpoint, you've enabled users to reserve their seats for a cinematic experience. Your validation logic and error handling ensure a seamless booking process, checking for user existence, available tickets, and limiting the maximum tickets per booking. This task further sharpens your skills in creating dynamic endpoints and managing real-time data interactions. Brace yourself for more exciting tasks as our cinematic coding adventure continues!

Helpful Links:
To complete this task, knowledge of JavaScript and API is required. You can learn JavaScript and API using the following resources:

JavaScript - Beginner To Advanced Course
API - Beginner To Advanced Course
JavaScript Interview Q&A
JavaScript Coding Practice
