'use strict';


var Wishlists = require('../../models/wishlist');



exports.getApartments=function(req,res,next){
    var userId = req.params.userId;
    var query=req.query;
    //console.log(userId);
    Wishlists.findByUserId(userId,query, function(err, result) {
        if (err) return next(err);
        result.status=200;
        res.status(200).send(result);
     })
}

exports.getApartment=function(req,res,next){
    var userId=req.params.userId;
    var aptId=req.params.id;

}

exports.addApartment=function(req,res,next){
    Wishlists.addWishApt(req.body, function(err, result){
        if (err) return next(err);
        res.status(200).send(result);
    });
}

exports.changeApartment = function ( req, res, next ) {
    var id = req.params.id;
    var body = req.body;
    Wishlists.changeApartment(id,body, function(err, result) {
        if (err) return next(err);
        res.status(200).send(result);
    })
}

exports.deleteApartment = function ( req, res, next ) {
    var aptId = req.params.id;
    var userId = req.params.userId;
    Wishlists.deleteApartment(aptId, userId, function(err, result) {
        if (err) return next(err);
        res.status(200).send(result);
    })
}


