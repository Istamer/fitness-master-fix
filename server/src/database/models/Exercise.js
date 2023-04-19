const {Schema, SchemaTypes, model} = require('mongoose');

const ExerciseSchema = Schema({
    pictures: {
        type: SchemaTypes.String,
        required: true,
    },
    exname:{
        type: SchemaTypes.String,
        required: true,
    },
    category:{
        type: SchemaTypes.String,
        required: true,
        enum: ['Руки', 'Ноги', 'Прес', 'Розминка'],
    },
    description:{
        type: SchemaTypes.String,
        required: true,
    },
    createdAt: {
        type: SchemaTypes.Date,
        required: true,
        default: new Date(),
    }
});

module.exports = model('exercises', ExerciseSchema);