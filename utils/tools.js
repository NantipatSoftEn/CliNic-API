const moment = require('moment-timezone');

let tools = {};

const momentTH = (time = 'now') => {
    moment.tz.add('Asia/Bangkok|BMT +07|-6G.4 -70|01|-218SG.4|15e6');
    if(time === 'now') {
        return moment().tz('Asia/Bangkok');
    }
    return moment(time).tz('Asia/Bangkok');
}

tools.moment = momentTH;

module.exports = tools;