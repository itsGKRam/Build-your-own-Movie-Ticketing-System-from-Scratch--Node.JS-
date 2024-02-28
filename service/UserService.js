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


exports.addUsers = async (data, res) => {
    const { name, username, email, password, date } = data;

    const text = `INSERT INTO my_users (date, email, name, password, username) VALUES ('${date}','${email}', '${name}', '${password}', '${username}') `;
    const result = await getQueryResult(text)
    if (result) {
        const userId = result.insertId
        const selectText = `SELECT user_id AS userId, name, username, email, date FROM my_users WHERE user_id = ${userId}`;
        const result2 = await getQueryResult(selectText)
        return result2[0]

    }
    return { success: false, message: "Faild to create User" }
};

exports.checkIfUserExist = async (key, value) => {
    const text = `SELECT * FROM my_users WHERE ${key} = '${value}'`;
    return getQueryResult(text)
};

exports.getUser = async () => {
    const text = `SELECT user_id AS userId, name, username, email, date FROM my_users`;
    return getQueryResult(text)
}