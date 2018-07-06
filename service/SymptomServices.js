// GET     /forums              ->  index    หน้า list
// GET     /forums/new          ->  new      show form html ให้กรอกข้อมูล
// POST    /forums              ->  create   รับจาก form แบบ post
// GET     /forums/:forum       ->  show     แสดงข้อมูลที่ ละ 1
// GET     /forums/:forum/edit  ->  edit     show form edit
// PUT     /forums/:forum       ->  update   update data
// DELETE  /forums/:forum       ->  destroy
const model = require('../configdb/sequelize')
const tools = require('../utils/tools');

exports.index = function (req, res) {
  model.symptom.findAll().then(result => {
    res.json(result);
  })
};

exports.new = function (req, res) {
  res.send('new forum');
};

exports.create = function (req, res) {
  return model.symptom.create({
    id: '',
    symptomname: 'headage',
    other: 'sdfdsfs',
    createdAt: tools.moment().format(),
    updatedAt: tools.moment().format()
  })
};

exports.show = function (req, res) {
  model.symptom.findAll({
      where: {
        id: req.params.symptom
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
  model.symptom.update({
    symptomname: 'headage',
    other: 'sdfdsfs',
    updatedAt: tools.moment().format()
  }, {
    where: {
      id: req.params.symptom
    }
  })
};

exports.destroy = function (req, res) {
  model.symptom.destroy({
    where: {
      id: req.params.symptom
    }
  });

};