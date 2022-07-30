'use strict';

import express from "express";
import Article from "../../models/article.js";
import auth from '../../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const articles = await Article.find({});
    return res.status(200).json({ success: true, data: articles });
})

router.post('/', async (req, res) => {
    const data = req.body;
    await Article.create(data, function (err) {
        if (!err) return res.status(200).json({ success: true, msg: 'good' });
        return res.status(400).json({error: err });    
    });
})

router.put('/:id', auth, async (req, res) => {

})

router.delete('/:id', auth, async (req, res) => {

})

router.use('/artices', router);

export default router