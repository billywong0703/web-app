import dotenv from "dotenv"

dotenv.config();

export default {
    port: process.env.PORT || 3000,
    app: {
        name: 'Web-App',
        apiURL: `${process.env.BASE_API_URL}`,
        serverURL: process.env.BASE_SERVER_URL,
        clientURL: process.env.BASE_CLIENT_URL
    },  
    database: {
        url: process.env.MONGO_URI
    },
};