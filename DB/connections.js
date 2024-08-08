import mongoose from "mongoose";

const URL = "mongodb+srv://yuvraj:1234@cluster0.j350fwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const promise = mongoose.connect(URL);
promise.then((data) => {
    console.log("db connected")
}).catch((err) => {
    console.log("error",err);
});
export default mongoose;