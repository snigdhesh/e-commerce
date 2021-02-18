//
const app = require('./app')
const dotenv = require('dotenv')
const dbConn = require('./configs/DBConfig')
dotenv.config({ path: 'backend/configs/config-dev.env' })
dbConn();
app.listen(process.env.PORT, () => {
    console.log(`Running ${process.env.NODE_ENV} sever on port ${process.env.PORT}..`);
})