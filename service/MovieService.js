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

exports.addMovie = async (data) => {
    const { movieName, showTime, date, availability } = data;
    const text = `INSERT INTO movies (movie_name, show_time, date, availability) VALUES ('${movieName}','${showTime}', '${date}', '${availability}') `;
    const result = await getQueryResult(text)
    if (result) {
        const movie_id = result.insertId;
        const selectText = `SELECT movie_id AS movieId, movie_name AS movieName, show_time AS showTime, date, availability FROM movies WHERE movie_id = ${movie_id}`;
        const result2 = await getQueryResult(selectText)
        return result2[0]

    }
    return { success: false, message: "Faild to Add Movie" }

};

exports.checkIfMovieExist = async (key, value) => {
    const text = `SELECT * FROM movies WHERE ${key} = '${value}'`;
    return getQueryResult(text)
};

exports.getMovie = async () => {
    const text = `SELECT movie_id AS movieId, movie_name AS movieName, show_time AS showTime, date, availability FROM movies`;
    return getQueryResult(text)

}



