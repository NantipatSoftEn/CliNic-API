// GET     /forums              ->  index    หน้า list
// GET     /forums/new          ->  new      show form html ให้กรอกข้อมูล
// POST    /forums              ->  create   รับจาก form แบบ post
// GET     /forums/:forum       ->  show     แสดงข้อมูลที่ ละ 1
// GET     /forums/:forum/edit  ->  edit     show form edit
// PUT     /forums/:forum       ->  update   update data
// DELETE  /forums/:forum       ->  destroy

var rate = require('../model/rate');
var sequelize = require('../model/config');
console.log(rate);
exports.index = function (req, res) {
    rate.findAll().then(result => {
        res.json(result);
    })
};


exports.create = function (req, res) {
    sequelize.sync()
        .then(() => rate.create({
            id: '',
            currency: req.body.currency,
            rate_cur: req.body.rate,
            createdAt: new Date(),
            updatedAt: new Date()
        }));
};
exports.show = function (req, res) {
    rate.findAll({
            //attributes: ['id', 'class'],
            where: {
                id: req.params.rate
            }
        })
        .then(result => {
            res.json(result);
        })
};

exports.update = function (req, res) {

    rate.update({
        currency: req.body.cur,
        rate_cur: req.body.rate
    }, {
        where: {
            id: req.params.rate
        }
    })
};

exports.destroy = function (req, res) {
    rate.destroy({
        where: {
            id: req.params.rate
        }
    });
    res.send('destroy forum ' + req.params.rate);
};