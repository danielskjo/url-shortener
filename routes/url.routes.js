import express from "express";

import {
  getUrls,
  shortenUrl,
  getUrl,
  editUrl,
  deleteUrl,
} from "../controllers/url.middleware.js";

const router = express.Router();

router.route("/").get(getUrls).post(shortenUrl);
router.route("/:new_url").get(getUrl).put(editUrl).delete(deleteUrl);

export default router;
