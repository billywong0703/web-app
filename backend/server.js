'use strict';

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import User from "./models/userSchema.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

const CONNECTION_URL = "http://localhost:27017/myapp";

const mongooseConnect = () => {
    console.log("connect");
}

const mongooseError = (e) => {
    console.log(e);
}

mongoose.connect(CONNECTION_URL, mongooseConnect, mongooseError);

const user = new User({login: "user", password: "sf"});



