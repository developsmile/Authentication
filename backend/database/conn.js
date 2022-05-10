const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/userDB');
const encrypt = require('mongoose-encryption')

const userSchema =mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const secret = "nxcdlsdicsdoucsddshos";
userSchema.plugin(encrypt,{ secret: secret, encryptedFields: ['password'] })
const User = new mongoose.model('User',userSchema);
module.exports = User;