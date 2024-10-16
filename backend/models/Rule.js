const mongoose = require('mongoose');

const ruleSchema = new mongoose.Schema({
    ruleString: {
        type: String,
        required: true,
    },
});

const Rule = mongoose.model('Rule', ruleSchema);

module.exports = Rule;
