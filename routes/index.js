var express = require('express');
var router = express.Router();

/* GET users listing. *//* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/catalog');
});
module.exports = router;
