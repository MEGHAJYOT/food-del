import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://fooddelivery:fooddelivery123@cluster0.x4mbejv.mongodb.net/fooddelivery').then(()=>console.log("DB Connected"));
   
}

