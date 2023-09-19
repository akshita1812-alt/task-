import mongoose from 'mongoose';

const cryptoSchema = new mongoose.Schema({
    name: String,
    last: Number,
    buy: Number,
    sell: Number,
    volume: Number,
    base_unit: String,
});

const cryptoModel = mongoose.model('crypto', cryptoSchema);

export {cryptoModel} ;
