const mongoose = require("mongoose");

const uri =
    "mongodb+srv://blackberry_cream:Fusion2me@login.j64o512.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
    try {
        await mongoose.connect(uri)
        console.log("Database is successfully connected.")
    } catch (error) {
        console.log(error)
    }
};

module.exports = connect;