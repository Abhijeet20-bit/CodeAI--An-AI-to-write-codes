const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect(`${process.env.CON_STR}/ChatGPT`);
        console.log('MongoDb connection Successful');
    }
    catch(error){
        console.log('MongoDb connection Unsuccessful',error);

    }
    
}

module.exports = connection