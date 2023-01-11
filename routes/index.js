var express = require('express');
var router = express.Router();

//GETアクセスの処理
router.get('/', function (req, res, next) {

        var data = {
          title: '郵便番号'
        };
        res.render('index',data)
      }
    );

module.exports = router;

