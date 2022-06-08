'use strict';

import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    login: String,
    password: String,
});


UserSchema.methods.speak = function () {
    console.log(this.login);
    console.log(this.password);
};

export default model("User", UserSchema);