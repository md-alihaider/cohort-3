const create = (req, res) => {
  console.log(req.body)
  console.log(req.files)
};

module.exports = {
  create,
};
