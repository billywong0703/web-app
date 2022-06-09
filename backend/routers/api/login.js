import express from "express";
import User from "../../models/userSchema.js"

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const { loginName, password } = req.body;

        if (!loginName || !password) return res.status(400).json({ success: false, error: 'invail data' });

        const user = await User.findOne({ loginName: loginName })

        if (!user) return res.status(400).send({ success: false, error: 'No user found for this loginName.' });

        const isMatch = await user.comparePassword(password);

        if (!isMatch) return res.status(400).json({ success: false, error: 'Password Incorrect' });

        return res.status(200).json({ success: true, msg: 'good' });
    }
    catch (error) {
        res.status(400).json({ success: false, error: 'Please content' });
    }
})

router.post('/add', async (req, res) => {
    try {
        const { loginName, password } = req.body;

        if (!loginName || !password) return res.status(400).json({ success: false, error: 'invail data' });

        const existingUser = await User.findOne({ loginName: loginName });

        if (existingUser) return res.status(400).json({ success: false, error: 'existing User' });

        const newUser = await User.create({ loginName: loginName, password: password });

        if (!newUser) return res.status(400).json({ success: false, error: 'cant add' });

        return res.status(200).json({ success: true, msg: 'good' });
    }
    catch (error) {
        res.status(400).json({ success: false, error: 'Please content' });
    }
})

export default router