import mongoose from "mongoose";
import keys from "../config/keys.js";

const { database } = keys;

const mongooseConnect = () => {
    console.log("connect");
}

const mongooseError = (e) => {
    console.log(e);
}

const setupDB = () => mongoose.connect(database.url, mongooseConnect, mongooseError);

export default setupDB