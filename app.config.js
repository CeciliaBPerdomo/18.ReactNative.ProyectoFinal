import "dotenv/config";

export default ({ config }) => ({
    ...config,
    extra: {
        FIREBASE_KEY: process.env.FIREBASE_KEY,
        MAP_API_KEY: process.env.MAP_API_KEY,
    },
});