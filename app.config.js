import "dotenv/config";

export default ({ config }) => ({
    ...config,
    extra: {
        FIREBASE_KEY: process.env.FIREBASE_KEY,
        MAP_API_KEY: process.env.MAP_API_KEY,
        "eas": {
            "projectId": "17d9df19-f98a-40a2-b970-ed6883ed64a1"
        }
    },
    android: {
        package: "mi.app.de.libritos" // Replace this with your actual Android package name
    }
});