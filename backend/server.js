'use strict';

import express from "express";
import bodyParser from "body-parser";
import setupDB from "./utils/database.js";
import cors from "cors";
import keys from './config/keys.js';
import routes from './routers/index.js';
import passportInitialize from './config/passport.js';


const app = express();

const port = keys.port;
const serverURL  = keys.app.serverURL;

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
app.use(routes);

setupDB();
passportInitialize(app);

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}. Visit ${serverURL} in your browser.`);
});
