const mongoose = require("mongoose")

async function main() {

    await mongoose.connect(process.env.MONGODB_ULR)
    console.log("MongoDB conectado")

}

main().catch((err) => { console.log(err) })

module.exports = mongoose