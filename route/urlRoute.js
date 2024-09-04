const express = require("express");
const auth = require("../middleware/authMiddleware")
const { shortenURL, redirectURL } = require("../controller/urlController");

const router = express.Router();

router.post("/shorten", auth, shortenURL);
router.get("/:shortUrl", redirectURL);

module.exports = router;
