const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Création du model User pour un stockage dans la base de données
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
});

// uniqueValidator = évite que plusieurs utilisateurs s'inscrivent avec le même mail
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);