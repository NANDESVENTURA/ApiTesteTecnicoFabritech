import app from './app';
require('dotenv').config();

const PORT = process.env.PORT || 3336;
app.listen(PORT, () => {
    console.log("SERVER IR RUNNING ON PORT: ", PORT)
});