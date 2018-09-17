var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongojs = require('mongojs');

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://where-you-at:gPhT486JxHXovxJU@cluster0-z7rnj.mongodb.net";
const dbName = 'test';

MongoClient.connect(url, function(err, client) {

	if (err) err;
	console.log("Connected successfully to server");
	const db = client.db(dbName);
	client.close();
});

router.get('/info',function(req,res,next){
	db.information.find(err,information){
		if (err) {
			res.send(err);
		}else{
			res.json(information);
		}
	}
})

router.post('/info',function(req,res,next){
	var info = req.body.data;
	if (!info.location) {
		res.status(400);
		res.json({
			error:'Invalid Data'
		})
	}else{
		db.information.save(info,function(err,saveInfo){
			if (err) {
				res.send(err);
			}else{
				res.json(saveInfo)
			}
		});
	}
})

module.exports = router;