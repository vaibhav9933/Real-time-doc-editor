const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
    _id: String,
    content: { type: Object, default: "" }, // Change from String to Object
});

module.exports = mongoose.model("Document", DocumentSchema);
