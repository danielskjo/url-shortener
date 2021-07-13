import express from "express";

import {
  getUrls,
  shortenUrl,
  getUrl,
  deleteUrl,
} from "../controllers/url.middleware.js";

const router = express.Router();

router.route("/").get(getUrls).post(shortenUrl);
router.route("/:path").get(getUrl).delete(deleteUrl);

export default router;
