'use strict';

import express from "express";
import loginRoutes from './api/login.js';
import articleRoutes from './api/article.js';

import keys from '../config/keys.js';

const router = express.Router();
const { apiURL } = keys.app;

const api = `/${apiURL}`;

router.use(api, loginRoutes);
router.use(api, articleRoutes);

router.use(api, (req, res) => res.status(404).json('No API route found'));

export default router;