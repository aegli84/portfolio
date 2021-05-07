const mongoose = require('mongoose');

const dbURI = `mongodb+srv://hello:<password>@cluster0.vpwv8.mongodb.net/portfolio?retryWrites=true&w=majority`

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('mongoooooo!')
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;