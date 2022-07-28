'use strict';

import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const article = new Schema({
    title: {
        type: String,
        required: true
    },
    anthor: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User' 
    },
    context: {
        type: String,
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    hidden: {
        type: Boolean,
        default: false 
    }
});


export default model("Articles", article);