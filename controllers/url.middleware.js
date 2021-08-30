import asyncHandler from "express-async-handler";
import config from "config";
// Check out nanoid
import shortid from "shortid";

import Url from "../models/url.model.js";

const getUrls = asyncHandler(async (req, res) => {
  try {
    const urls = await Url.find();
    res.json(urls);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

const shortenUrl = asyncHandler(async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const domain = config.get("domain");

    const urlPath = shortid.generate();

    let url = await Url.findOne({ originalUrl });

    if (url) {
      res.json(url);
    } else {
      const newUrl = domain + "/api/urls/" + urlPath;

      const url = new Url({
        urlPath,
        originalUrl,
        newUrl,
      });

      const createdUrl = await url.save();

      res.status(201).json(createdUrl);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

const getUrl = asyncHandler(async (req, res) => {
  try {
    const url = await Url.findOne({ urlPath: req.params.path });

    if (url) {
      res.redirect(url.originalUrl);
      res.json(url);
    } else {
      res.status(404).json({ message: "URL not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

const deleteUrl = asyncHandler(async (req, res) => {
  try {
    const url = await Url.findOne({ urlPath: req.params.path });

    if (url) {
      await url.remove();
      res.json({ message: "Url removed" });
    } else {
      res.status(404).json({ message: "URL not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export { getUrls, shortenUrl, getUrl, deleteUrl };
