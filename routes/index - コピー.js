var express = require('express');
var router = express.Router();
var alert = require('alert');


//GETアクセスの処理
router.get('/', function (req, res, next) {

        var data = {
          title: '郵便番号'
        };
        res.render('index',data)
      }
    );



//作成完了(12/21)
//検索したIDのレコードを表示する
router.get('/mapinfo', (req, res, next) => {

  var postalcode = req.query.postalcode;

      var data = {
        title: 'マップ',
        content: '入力された番号：' + postalcode ,
        my_address : postalcode
      }
      res.render('mapinfo', data);

    });

module.exports = router;