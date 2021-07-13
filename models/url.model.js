import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  urlPath: {
    type: String,
    required: true,
  },
  originalUrl: {
    type: String,
    required: true,
  },
  newUrl: {
    type: String,
    required: true,
  },
});

const Url = mongoose.model("url", urlSchema);

export default Url;
