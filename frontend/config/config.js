'use strict';
import { resolve } from 'path';


export default function getConfig() {
    const config = {
        'MODE': 'Development',
        'PORT': process.env.PORT || 5000,
        'MONGO_URL': process.env.MONGO_URL,
        'UPLOAD_PATH': resolve(`${__dirname}/../uploads`),
        'JWT_SECRET': process.env.JWT_SECRET || 'R4ND0M5TR1NG'
    };
    // Modify for Production
    if (process.env.NODE_ENV === 'production') {
        config.MODE = 'Production';
    }
    return config;
}