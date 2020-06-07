const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    items: {
        type: Array,
        required: true,
        default: []
    }
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;