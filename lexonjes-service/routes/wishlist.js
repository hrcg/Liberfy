var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/wishlist', function(req, res, next) {
let jsonResponse= {
  "handsetCards": [
    { imageName:'book1', title: '', cols: 2, rows: 1 },
    { imageName:'book2', title: '', cols: 2, rows: 1 },
    { imageName:'book3', title: '', cols: 2, rows: 1 },
    { imageName:'book4', title: '', cols: 2, rows: 1 }
  ],
  "webCards":  [
    { imageName:'book1', title: '', cols: 2, rows: 1 },
    { imageName:'book2', title: '', cols: 1, rows: 1 },
    { imageName:'book3', title: '', cols: 1, rows: 2 },
    { imageName:'book4', title: '', cols: 1, rows: 1 }
  ]
}

  res.json(jsonResponse);
});

module.exports = router;
