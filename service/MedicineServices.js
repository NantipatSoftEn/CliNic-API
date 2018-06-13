// GET     /forums              ->  index    หน้า list
// GET     /forums/new          ->  new      show form html ให้กรอกข้อมูล
// POST    /forums              ->  create   รับจาก form แบบ post
// GET     /forums/:forum       ->  show     แสดงข้อมูลที่ ละ 1
// GET     /forums/:forum/edit  ->  edit     show form edit
// PUT     /forums/:forum       ->  update   update data
// DELETE  /forums/:forum       ->  destroy
const model = require('../config/sequelize')

exports.index = function (req, res) {
  model.medicine.findAll().then(result => {
    res.json(result);
  })
};

exports.new = function (req, res) {
  res.send('new forum');
};

exports.create = function (req, res) {
   model.medicine.create({
    id: '',
    medicineName: req.body.medicineName,
    createdAt: new Date(),
    updatedAt: new Date()
  })
};

exports.show = function (req, res) {
  model.medicine.findAll({
      where: {
        id: req.params.medicine
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
  model.medicine.update({
    medicineName: req.body.medicineName,
    updatedAt: new Date()
  }, {
    where: {
      id: req.params.medicine
    }
  })
};

exports.destroy = function (req, res) {
  model.medicine.destroy({
    where: {
      id: req.params.medicine
    }
  });

};