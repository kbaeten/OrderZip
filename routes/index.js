require('dotenv').config();
var express = require('express');
var router = express.Router();
var knex = require('../db/knex');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/accounts', function(req, res, next){
  knex('accounts').then(function(data){
    res.json(data);
  })
})
router.get('/beers', function(req, res, next){
  knex('beers').then(function(data){
    res.json(data);
  })
})
router.get('/api', function(req, res, next){
  knex('accounts_beers').then(function(data){
    res.json(data);
  })
})
router.get('/account/:id', function(req, res, next){
  knex('accounts').where('id', req.params.id).then(function(data){
    res.json(data);
  })
})
module.exports = router;
