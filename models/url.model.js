import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  original_url: {
    type: String,
    required: true,
  },
  new_url: {
    type: String,
    required: true,
  },
});

const Url = mongoose.model("url", urlSchema);

export default Url;
