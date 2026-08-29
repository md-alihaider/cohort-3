const imagekit = require("../config/imagekit.config.js")

const create = async(req, res) => {
  const file = req.file

  const uploadedFile = await imagekit.upload({
    file: file.buffer,
    fileName: file.originalname,
    folder:'uploads'
  })

  res.status(201).json({
    message: 'File uploaded successfully',
    imageUrl: uploadedFile.url
  })
}

module.exports = {
  create
}