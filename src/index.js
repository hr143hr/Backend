// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server is runing port : ${process.env.PORT}`);
    })
})
.catch((error) => {
console.log("Mongo conection fail");
});










