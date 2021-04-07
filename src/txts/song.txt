const mongoose = require('mongoose');
var validate = require('mongoose-validator')

const Schema = mongoose.Schema;

//Create song Schema and Model
const SongSchema = new Schema({
    name: {
        type:String,
        required:[true,'Name is required'],
    },
    artist: {
        type:String,
        required:[true,'Artist name is required']
    },
    img_url:{
        type:String,
        required:[true,'Image URL is required'],
        // validate: { 
        //     validator: value => validator.isURL(value, { protocols: ['http','https','ftp'], require_tld: true, require_protocol: true }),
        //     message: 'Must be a Valid URL' 
        //   }
    },
    song_url:{
        type:String,
        required:[true,'Song URL is required'],
        // validate: { 
        //     validator: value => validator.isURL(value, { protocols: ['http','https','ftp'], require_tld: true, require_protocol: true }),
        //     message: 'Must be a Valid URL' 
        //   }
    }
});
const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
SongSchema.path('img_url').validate((val) => {  
    return urlRegex.test(val);
}, 'Invalid URL.');

SongSchema.path('song_url').validate((val) => {
    return urlRegex.test(val);
}, 'Invalid URL.');

const Song = mongoose.model('Song', SongSchema);
module.exports = Song;