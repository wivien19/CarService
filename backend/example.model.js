const mongoose = require('mongoose');

var exampleSchema = new mongoose.Schema(
    {
        id: {type: String, unicode: true, required: true, lowercase: true},
        value : {type: String, required: true}
    },
    {collection: 'example'}
);

mongoose.model('example', exampleSchema);