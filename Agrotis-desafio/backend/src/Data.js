import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DataSchema = new Schema({
  name: String,
  description: String
});

export const DataCollection = mongoose.model("Data", DataSchema);
