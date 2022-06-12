import express from "express";
import apiRoutes from './api/login.js';
import keys from '../config/keys.js';

const router = express.Router();
const { apiURL } = keys.app;

const api = `/${apiURL}`;

router.use(api, apiRoutes);
router.use(api, (req, res) => res.status(404).json('No API route found'));

export default router;