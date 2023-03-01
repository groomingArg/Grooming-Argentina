const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        category: {
            type: Array,
            required: true,
            default: []
        },
        link: {
            type: String,
        },
        provinceOrLocation: {
            type: String,
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('new', newsSchema);