const shortid = require("shortid");
const urlModel = require("../model/urlModel");

const shortenURL = async (req, res) => {
  const { originalUrl } = req.body;
  const { id } = req.user;
  try {
    if (!originalUrl) {
      return res.status(400).send({ message: "Please Enter URL" });
    }
    const shortId = shortid.generate();
    const url = await urlModel.create({
      originalUrl: originalUrl,
      shortUrl: shortId,
      user: id,
    });
    return res.status(201).send({ message: "URL Created Success", data: url });
  } catch (error) {
    return res.status(500).send({ message: "Something Went Wrong" });
  }
};
const redirectURL = async (req, res) => {
  const { shortUrl } = req.params;
  try {
    const url = await urlModel.findOne({ shortUrl });
    if (url) {
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).send({ message: "URL Not Found" });
    }
  } catch (error) {
    return res.status(500).send({ message: "Something Went Wrong" });
  }
};

module.exports = { shortenURL, redirectURL };
