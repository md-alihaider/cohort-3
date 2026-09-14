import express from "express";
const router = express.Router();

/**'
 * @POST /api/url
 * req.body = {url: "https://logurl.com"}
 */

router.post("/", async (req, res) => {
  //receive payload
  const { url } = req.body;

  //validation
  if (!url) {
    return res.status(400).json({ error: "Please enter a URL" });
  }
  if (
    url.startsWith("http://") == false &&
    url.startsWith("https://") == false
  ) {
    return res.status(400).json({
      error: "Please enter a valid URL starting with http:// or https://",
    });
  }
  if (url.length > 2048) {
    return res.status(400).json({
      error: "URL is too long",
    });
  }
});

export default router;
