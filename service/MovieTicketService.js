const pool = require("../db");

const getQueryResult = async (text) => {
    return new Promise((resolve, reject) => {
        pool.query(text, (error, result) => {
            if (error) {
                console.log(error);
                reject(false);
            } else {
                resolve(result);
            }
        });
    }).then((msg) => msg).catch((err) => err)
}

exports.isAvailable = async (id, tickets) => {
    const text = `SELECT * FROM movies WHERE movie_id = '${id}' AND availability >= '${tickets}'`
    return getQueryResult(text)
}


exports.bookTickets = async (movieId, userId, numberOfTickets) => {
    const text = `INSERT INTO movie_ticket (movie_id, user_id, number_of_tickets) VALUES ('${movieId}', '${userId}', '${numberOfTickets}');`
    const result = await getQueryResult(text)
    if (!result) return false

    const text2 = `UPDATE movies SET availability = availability - '${numberOfTickets}' WHERE movie_id = '${movieId}';`
    const result2 = await getQueryResult(text2)
    if (!result2) return false

    const movie_ticket_id = result?.insertId
    const text3 = `SELECT movie_ticket_id AS movieTicketId, user_id AS userId, movie_id AS movieId, number_of_tickets AS numberOfTickets FROM movie_ticket WHERE movie_ticket_id = ${movie_ticket_id}`
    const result3 = await getQueryResult(text3)
    return result3[0]

}
