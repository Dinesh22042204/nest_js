import mongoose from "mongoose";

export const StudentSchema = new mongoose.Schema({
    name : String,
    initial : String,
    age : Number,
    city : String
  }) 