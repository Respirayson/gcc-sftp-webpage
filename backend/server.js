import app from "./index.js";

const PORT = 8080;

try {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} catch (error) {
    console.log("Error occurred: ", error);
}