
// GET     /forums              ->  index    หน้า list
// GET     /forums/new          ->  new      show form html ให้กรอกข้อมูล
// POST    /forums              ->  create   รับจาก form แบบ post
// GET     /forums/:forum       ->  show     แสดงข้อมูลที่ ละ 1
// GET     /forums/:forum/edit  ->  edit     show form edit
// PUT     /forums/:forum       ->  update   update data
// DELETE  /forums/:forum       ->  destroy

var money = require('../model/money');
var rate = require('../model/rate');
var sequelize = require('../model/config');
exports.index = function(req, res) {
    money.findAll().then(result => {
        res.json(result);
    })
};
exports.create = function(req, res) {
    money.create({
                id:'',
                amount: req.body.amount,
                type_id: 2,
                edit: req.body.edit,
                createdAt: new Date(),
                updatedAt: new Date()
        });
    money.findOne({
                attributes: ['amount'],
                where: {
                    id: 1
                }
            })
            .then(result => {
                let temp = result.amount;
                temp+=+ req.body.amount;
                money.update({
                  amount: temp },
                { where: { id: 1 } })
            })
};
exports.show = function(req, res) {
    money.findAll({where: {id: req.params.money}})
        .then(result => {res.json(result);})
};

exports.update = function(req, res) {
    money.update(
    { amount: req.body.amount,
      type_id: req.body.type_id,
      edit:req.body.edit },
    { where: { id: req.params.money } })
};

exports.destroy = function(req, res) {
    money.destroy({
        where: {
            id: req.params.money
        }
    });
    res.send('destroy forum ' + req.params.money);
};

exports.init = function () {
    money.findOne({
        attributes: ['amount'],
        where: {id: 1}
    })
        .then(result => {res.json(result);})
};