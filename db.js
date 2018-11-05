const mongoose = require('mongoose')
console.log("process.env.NODE_ENV", process.env.NODE_ENV)
const config = require(`./config/config.${process.env.NODE_ENV}.js`)

const db = () => {
    mongoose.connect(config.mongodburi);
    const connection = mongoose.connection;
    connection.on('error', console.error.bind(console, 'connection error'))
    connection.once('open', () => {
        console.log('Connected to mongo db')
    })
}

module.exports = db;