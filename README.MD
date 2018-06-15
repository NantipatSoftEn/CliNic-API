# Clinic-Application Programming Interface
> Use for Clinical Project only . 

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

##  RELATIONSHIP

![](ER-DIAGRAM.png)



## Usage example

- table symptoms  ไว้เก็บอาการป่วยต่างๆ 
- table profilepatent     profile ของ user ที่ป่วย
- table period ช่วงเวลาที่หมอรับคนเข้าคิว
- table reserration การจองของ user



## Install Database
npm test ก่อนเพื่อให้ sequelizejs sync table ลง serve ก่อนแล้วจึง seeder ตามไป
```sh
    npm test
    sequelize seed:create --name my-seed-file
```

## memo  devolopment packed
```sh
     npm install -g express-generator
     express --view=hbs
     npm install -g nodemon
     npm install sequelize-cli -g (ให้สามารถใช้แบบ cmd ได้) 
     sequelize init
     npm install --save mysql2
     npm install cors
     npm install -g body-parser
```
 > config scripts   "test": "nodemon ./bin/www"

 ```javascript
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
```
<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki