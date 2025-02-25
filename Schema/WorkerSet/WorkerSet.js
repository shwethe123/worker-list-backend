const mongoose = require("mongoose");

const schema = mongoose.Schema;

const Worker_set_schema = new schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    condition: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        default: "https://res.cloudinary.com/dfao1qztg/image/upload/v123456789/default-profile.png"
    },
    }, { timestamps: true });

    module.exports = mongoose.model("WorkerSet", Worker_set_schema);