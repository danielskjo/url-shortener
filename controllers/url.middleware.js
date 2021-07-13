import asyncHandler from "express-async-handler";

import Url from "../models/url.model.js";

const getUrls = asyncHandler(async (req, res) => {
  const urls = await Url.find();
  res.json(urls);
});

const shortenUrl = asyncHandler(async (req, res) => {
  const { original_url, new_url } = req.body;

  const url = new Url({
    original_url,
    new_url,
  });

  const createdUrl = await url.save();

  res.status(201).json(createdUrl);
});

const getUrl = asyncHandler(async (req, res) => {
  const url = await Url.findById(req.params.id);

  if (url) {
    res.json(url);
  } else {
    res.status(404).json({ msg: "URL not found" });
  }
});

const editUrl = asyncHandler(async (req, res) => {
  const url = await Url.findById(req.params.id);

  if (url) {
    url.original_url = req.body.original_url || url.original_url;
    url.new_url = req.body.new_url || url.new_url;

    const updatedUrl = await url.save();

    res.json(updatedUrl);
  } else {
    res.status(404).json({ msg: "URL not found" });
  }
});

const deleteUrl = asyncHandler(async (req, res) => {
  const url = await Url.findById(req.params.id);

  if (url) {
    await url.remove();
    res.json({ msg: "Url removed" });
  } else {
    res.status(404).json({ msg: "URL not found" });
  }
});

export { getUrls, shortenUrl, getUrl, editUrl, deleteUrl };
