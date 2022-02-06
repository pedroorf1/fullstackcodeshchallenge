const mongoose = require("../database/conn")

const { Schema } = mongoose

const Spacef = mongoose.model(
    "spacef",
    new Schema({
        id: { type: Number, unique: true },
        featured: { type: Boolean, required: true, default: false },
        title: { type: String },
        url: { type: String },
        imageUrl: { type: String },
        newsSite: { type: String },
        summary: { type: String },
        publishedAt: { type: String },
        launches: [{
            id: String,
            provider: String,
        }],
        events: [{
            id: String,
            provider: String,
        }]
    },

    )

)

module.exports = Spacef
