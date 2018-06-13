// GET     /forums              ->  index    หน้า list
// GET     /forums/new          ->  new      show form html ให้กรอกข้อมูล
// POST    /forums              ->  create   รับจาก form แบบ post
// GET     /forums/:forum       ->  show     แสดงข้อมูลที่ ละ 1
// GET     /forums/:forum/edit  ->  edit     show form edit
// PUT     /forums/:forum       ->  update   update data
// DELETE  /forums/:forum       ->  destroy
const model = require('../config/sequelize')

exports.index = function (req, res) {
  model.period.findAll().then(result => {
    res.json(result);
  })
};

exports.new = function (req, res) {
  res.send('new forum');
};

exports.create = function (req, res) {
   model.period.create({
    id: '',
    periodName: req.body.periodName,
    createdAt: new Date(),
    updatedAt: new Date()
  })
};

exports.show = function (req, res) {
  model.period.findAll({
      where: {
        id: req.params.period
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
  model.period.update({
    periodName: req.body.periodName,
    updatedAt: new Date()
  }, {
    where: {
      id: req.params.period
    }
  })
};

exports.destroy = function (req, res) {
  model.period.destroy({
    where: {
      id: req.params.period
    }
  });

};