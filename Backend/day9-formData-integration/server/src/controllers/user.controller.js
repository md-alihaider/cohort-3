const create = (req, res) => {
  console.log(req.body)
  console.log(req.files)
  res.send('ok')
};

module.exports = {
  create,
};
