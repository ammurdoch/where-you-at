var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
    latitude : {type:Number},
    longitude: {type:Number},
    latitudeDelta: {type:Number},
    longitudeDelta: {type:Number},
    text: {type:String},
    color: {type:Boolean}
},{ collection: 'location'});

module.exports=mongoose.model('Location',LocationSchema);
