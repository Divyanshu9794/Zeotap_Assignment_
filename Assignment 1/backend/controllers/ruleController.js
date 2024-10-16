const Rule = require('../models/Rule');

// AST Node structure
class Node {
    constructor(type, value = null, left = null, right = null) {
        this.type = type;
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Parse rule string into AST
function parseRule(ruleString) {
    if (ruleString.includes('AND')) {
        const parts = ruleString.split('AND');
        return new Node('AND', null, parseRule(parts[0].trim()), parseRule(parts[1].trim()));
    } else if (ruleString.includes('OR')) {
        const parts = ruleString.split('OR');
        return new Node('OR', null, parseRule(parts[0].trim()), parseRule(parts[1].trim()));
    } else {
        return new Node('operand', ruleString.trim());
    }
}

// Evaluate AST against user attributes
function evaluate(node, attributes) {
    if (node.type === 'operand') {
        const [attribute, operator, value] = node.value.split(' ');
        const attrValue = parseInt(attributes[attribute], 10);
        const targetValue = parseInt(value, 10);

        switch (operator) {
            case '>': return attrValue > targetValue;
            case '<': return attrValue < targetValue;
            case '=': return attributes[attribute] == value; // Using == for string comparison
            default: return false;
        }
    } else if (node.type === 'AND') {
        return evaluate(node.left, attributes) && evaluate(node.right, attributes);
    } else if (node.type === 'OR') {
        return evaluate(node.left, attributes) || evaluate(node.right, attributes);
    }
    return false;
}

// Controller to create a new rule
exports.createRule = async (req, res) => {
    const { ruleString } = req.body;
    try {
        const rule = new Rule({ ruleString });
        await rule.save();
        res.json({ ruleId: rule._id });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create rule' });
    }
};

// Controller to evaluate a rule against attributes
exports.checkEligibility = (req, res) => {
    const { rule, attributes } = req.body;
    const ast = parseRule(rule);
    const isEligible = evaluate(ast, attributes);
    res.json({ isEligible });
};

// Controller to fetch all rules
exports.getAllRules = async (req, res) => {
    try {
        const rules = await Rule.find();
        res.json(rules);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch rules' });
    }
};
