import config from "config";
import mongoose from "mongoose";
mongoose.Promise = global.Promise;

const dbName = config.get('DB_NAME');
const dbString = config.get('DB_STRING');

const options = {
    dbName:dbName,
    serverSelectionTimeoutMS: 30000,
}

export const connectToDatabase = async () => {
    return mongoose.connect(dbString,options).then(db => {
        console.log(`------DB CONNECTION CREATED AND CONNECTED TO ${dbName}------`);
    },
    err => {
        console.log(`-----MONGO ERROR ${err}----`);
    })
}