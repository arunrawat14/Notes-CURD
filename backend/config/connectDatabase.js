const mongoose = require('mongoose')

const dbConnect = () => {
    mongoose.connect(process.env.DATABASR_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> {
        console.log("Connected to the database ");
    })
    .catch((err)=> {
        console.log(error);
        process.exit(1);
    })
}

module.exports = dbConnect;