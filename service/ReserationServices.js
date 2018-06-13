// GET     /forums              ->  index    หน้า list
// GET     /forums/new          ->  new      show form html ให้กรอกข้อมูล
// POST    /forums              ->  create   รับจาก form แบบ post
// GET     /forums/:forum       ->  show     แสดงข้อมูลที่ ละ 1
// GET     /forums/:forum/edit  ->  edit     show form edit
// PUT     /forums/:forum       ->  update   update data
// DELETE  /forums/:forum       ->  destroy
const model = require('../config/sequelize')

exports.index = function (req, res) {
  model.reseration.findAll({
    include: [{
      model: model.users,
      model: model.period
    }]
  }).then(result => {
    res.json(result);
  })
};

exports.new = function (req, res) {
  res.send('new forum');
};

exports.create = function (req, res) {
  model.reseration.create({
    id: '',
    queue: req.body.queue,
    userId: req.body.userId,
    periodId: req.body.periodId,
    createdAt: new Date(),
    updatedAt: new Date()
  })
};

exports.show = function (req, res) {
  model.reseration.findAll({
      where: {
        id: req.params.reseration
      }
    })
    .then(result => {
      res.json(result);
    })
};

exports.edit = function (req, res) {
  res.send('edit forum ' + req.params.forum);
};

exports.update = function (req, res) {
  model.reseration.update({
    queue: req.body.queue,
    userId: req.body.userId,
    periodId: req.body.periodId,
    updatedAt: new Date()
  }, {
    where: {
      id: req.params.user
    }
  })
};

exports.destroy = function (req, res) {
  model.reseration.destroy({
    where: {
      id: req.params.reseration
    }
  });

};