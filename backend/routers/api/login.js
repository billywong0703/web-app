'use strict';

import express from "express";
import User from "../../models/user.js"
import auth from '../../middleware/auth.js';
import jwt from 'jsonwebtoken';
import keys from '../../config/keys.js';

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const { loginName, password } = req.body;
        if (!loginName || !password) {
            return res.status(400).json({
                error: 'loginName password'
            });
        }

        const user = await User.findOne({ loginName: loginName });
        if (!user) {
            return res.status(400).json({
                error: 'No user found for this loginName.'
            });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({
                error: 'Password Incorrect.'
            });
        }

        const token = jwt.sign({ id: user.id }, keys.jwt.secret, { expiresIn: keys.jwt.tokenLife });
        res.cookie('auth_token ', token);
        res.status(200).json({
            success: true
        });
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
})

router.post('/logout', auth, async (req, res) => {
    res.clearCookie('auth_token');
    res.status(200).json({
        success: true
    });
})

router.post('/add', auth, async (req, res) => {
    try {
        const { loginName, password } = req.body;
        if (!loginName || !password) {
            return res.status(400).json({
                error: 'loginName password'
            });
        }

        const existingUser = await User.findOne({ loginName: loginName });
        if (existingUser) {
            return res.status(400).json({
                error: 'existing user'
            });
        }

        const newUser = await User.create({ loginName: loginName, password: password });
        if (!newUser) {
            return res.status(400).json({
                error: 'you can not add new User'
            });
        }

        return res.status(200).json({ success: true, msg: 'good' });
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
})

router.use('/auth', router);

export default router