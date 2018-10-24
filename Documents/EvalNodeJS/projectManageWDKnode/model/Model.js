const mongoose =require('mongoose');

const UserSchema = mongoose.UserSchema({
	name: String,
	description: String,
	datedebut: Date,
	dateFin: Date,
	client: String,
	montantTotal: Number,
	statut: String
},);
module.exports = mongoose.module('Project',ProjectSchema);
