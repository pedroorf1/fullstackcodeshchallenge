const apiLocal = require('../api/syncApi')
const CronJob = require('cron').CronJob

module.exports = recData = () => {

    apiLocal.get("sync")
        .then((resp) => {
            console.log("Satus of service: ", resp)
        })
        .catch((err) => {
            console.log("Error: ", err)
        })
    //job executa todo dia as 9 da manha
    new CronJob('0 0 9 * * *', () => {
        recData();
    }).start();
}

//////////////////////////////////////////////////////////////////////////////////////
// const SyncRegisters = new CronJob('0 * * * * *', () => {
//     recData();
// });

//SyncRegisters.start();
