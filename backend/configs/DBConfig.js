const mongoose = require('mongoose')

const dbConn = () => {
    mongoose.connect(process.env.DB_URL, {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
    }).then(con => { console.log(`Connected to mongodb with host ${con.connection.host}`) })
        .catch((err) => console.log("Error occurred while connecting to mongodb database."))
}

module.exports = dbConn;