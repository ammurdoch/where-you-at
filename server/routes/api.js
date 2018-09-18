
var Location = require('../models/location');

module.exports = function(router){

    router.post('/location',function(req,res){
        var location = new Location();
        location.latitude = req.body.latitude;
        location.longitude = req.body.longitude;
        location.latitudeDelta = req.body.latitudeDelta;
        location.longitudeDelta = req.body.longitudeDelta;
        location.text = req.body.text;
        location.color = req.body.color;

        location.save(function(err){
            if(err){
                res.json({success:false,message:'Error While Saving Location!'});
            }
            else{
                res.json({success:true,message:'Location is Saved!'})
            }
        });

    });
     router.post('/getLocation',function(req, res){
        Location.find({}).sort('color')
            .select("latitude longitude latitudeDelta longitudeDelta text color")
            .exec(function(err,locatioInfo){
                if (err) throw err;
                if (!locatioInfo) {
                    res.json({success:false,message:'There is NO Location'});
                } else{
                    res.json({success:true,message:'Locations are Found!',locatioInfo :locatioInfo});
                }
            });
    });
    
    return router;
}
