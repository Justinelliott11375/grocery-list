const List = require('../../server/models').List;

module.exports = {
  create(req, res) {
    return List
      .create({
        title: req.body.title,
        description: req.body.title
      })
      .then(list => res.status(201).send(list))
      .catch(error => res.status(400).send(error));
  },
};