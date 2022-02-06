require("dotenv").config()
const app = require('./server/Server')

//starting app
app.listen(process.env.APP_PORT, () => {
    console.log('Server started')
})

//////////////CRON/////////////////////////////

const CronSyncRegister = require('./helpers/Cron')

//CronSyncRegister();
