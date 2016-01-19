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

router.post('/:id', function(req, res, next){
  res.redirect('/movies/' + req.params.id)
})

router.post('/:id/delete', function(req, res, next){
  res.redirect('/')
})

router.get('/:movie_id/reviews', function(req, res, next){
  res.render('movies/reviews/show')
})


module.exports = router;
