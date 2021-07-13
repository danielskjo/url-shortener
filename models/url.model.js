import mongoose from "mongoose";

const urlSchema = new mongoose.schema({
  original: {
    type: String,
    required: true,
  },
  new: {
    type: String,
    required: true,
  },
});

const Url = mongoose.model("url", urlSchema);

export default Url;
