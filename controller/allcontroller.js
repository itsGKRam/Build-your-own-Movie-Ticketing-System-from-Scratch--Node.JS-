const express = require("express");
const router = express.Router();
const UserService = require("../service/UserService");
const MovieService = require("../service/MovieService");
const MovieTicketService = require("../service/MovieTicketService");

router.post("/addUsers", async (req, res) => {
  const { name, username, email, password, date } = req.body;
  if (!name?.trim() || !username?.trim() || !email?.trim() || !password?.trim() || !date?.trim()) return res.status(400).json({ success: false, message: `Incomplete information ${!name ? "Name" : !username ? "Username" : !email ? "Email" : !date ? "Date" : "All fields are required"} is missing` })
  if (name.length < 4 || /\d/.test(name)) return res.status(400).json({ success: false, message: "Name should have a minimum length of 4 characters and must not contain any digits." })
  if (username.length < 5) return res.status(400).json({ success: false, message: "Username must have a minimum length of 5 characters" })
  if (!/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ success: false, message: "The email provided is not valid" })
  if (password.length < 8 || !/\d/.test(password)) return res.status(400).json({ success: false, message: "The password should be greater than or equal to 8 characters and must contain at least one digit." })

  const usernameExist = await UserService.checkIfUserExist("username", username)
  if (usernameExist.length != 0) return res.status(400).send({ success: false, message: "Username already taken. Please choose another username." })

  const emailExist = await UserService.checkIfUserExist("email", email)
  if (emailExist.length != 0) return res.status(400).json({ success: false, message: "Email already used by another user." })

  const result = await UserService.addUsers(req.body);
  return res.status(200).send(result)
});

router.get("/getUser", async (req, res) => {
  let result = await UserService.getUser();
  if (!result) {
    return res.status(400).send({
      "success": false,
      "message": "Users not found"
    })
  }
  return res.status(200).send(result);
});

router.post("/addMovie", async (req, res) => {

  const { movieName, showTime, date, availability } = req.body;

  if (!movieName?.trim() || !showTime?.trim() || !date?.trim() || !availability || availability < 0) return res.status(400).send({ "success": false, "message": "Invalid movie information. Please check your inputs." })
  if (new Date(date) < new Date()) return res.status(400).send({ "success": false, "message": "Ensure the movie date is in the future, as current or past dates are not allowed for scheduling." })

  const movieExist = await MovieService.checkIfMovieExist("movie_name", movieName)
  if (movieExist.length != 0) return res.status(400).send({ success: false, message: "Movie already Exist in the Database" })

  let result = await MovieService.addMovie(req.body);
  return res.status(200).send(result);
});

router.get("/getMovie", async (req, res) => {
  let result = await MovieService.getMovie();
  if (!result) {
    return ({
      "success": false,
      "message": "Movies not found"
    })
  }
  return res.status(200).send(result);
});



router.post("/book/:movieId/numberOfTickets", async (req, res) => {

  const isPositive = (value) => {
    return parseInt(value) > 0 ? true : false
  }

  const movieId = parseInt(req.params.movieId)
  const { userId, numberOfTickets } = req.body;
  
  if (!movieId || !userId || !numberOfTickets) return res.status(400).send({ success: false, message: `Invalid/Missing field ${!movieId ? "Movie ID" : !userId ? "User ID" : !numberOfTickets ? "Number Of Tickets" : `All fields are Required`}` })
  if (!isPositive(movieId) || !isPositive(userId) || !isPositive(numberOfTickets)) return res.status(400).send({ success: false, message: `Field ${!isPositive(movieId) ? "Movie ID" : !isPositive(userId) ? "User ID" : !isPositive(numberOfTickets) ? "Number Of Tickets" : `---`} Should be Positive/Invalid` })
  if (parseInt(numberOfTickets) > 5) return res.status(400).send({ success: false, message: `Maximum Number of Ticket booking Reached ${numberOfTickets}/5` })

  const isUser = await UserService.checkIfUserExist("user_id", userId);
  if (isUser.length === 0) return res.status(400).send({ success: false, message: "User is Not a Registered User" })

  const isAvailable = await MovieTicketService.isAvailable(movieId, numberOfTickets);
  if (isAvailable.length === 0) return res.status(400).send({ success: false, message: "Tickets are not available for Booking" })

  let result = await MovieTicketService.bookTickets(movieId, userId, numberOfTickets);
  if (!result) {
    return res.status(400).send({
      success: false,
      message: "Tickets failed to book. Number of tickets exceeds the maximum limit."
    })
  }

  return res.status(200).send(result);
});



module.exports = router;