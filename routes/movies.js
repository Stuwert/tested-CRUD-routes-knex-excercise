var express = require('express');
var router = express.Router();

/* Movies Routes Go Here. */

router.get('/', function (req, res, next) {
  res.render('movies/index');
})

router.get('/new', function(req, res, next){
  res.render('movies/new')
})

router.post('/', function(req, res, next){
  res.redirect('/')
})

router.get('/:id', function(req, res, next){
  res.render('movies/show')
})

router.get('/:id/edit', function(req, res, next){
  res.render('movies/edit')
})

router


module.exports = router;
