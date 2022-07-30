'use strict';

import express from "express";
import auth from '../../middleware/auth.js';
import { promises as fs } from 'fs';


const router = express.Router();

router.get('/meun', auth, async (req, res) => {
    try{
        const meun = await fs.readFile('./json/Meun.json', 'utf8');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(meun);
    }
    catch(err){
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
})

export default router