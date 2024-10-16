// /backend/utils/ruleEvaluator.js
const VALID_FIELDS = ['age', 'department', 'salary', 'experience'];

function evaluateSingleCondition(condition, userData) {
    if (!condition || !condition.field || !condition.operator || typeof condition.value === 'undefined') {
        throw new Error("Invalid condition structure");
    }

    // Example evaluation logic
    const { field, operator, value } = condition;
    if (!VALID_FIELDS.includes(field)) {
        throw new Error(`Invalid field: ${field}`);
    }

    // Implement your evaluation logic based on the operator here.
    // For demonstration, let's assume a simple case:
    if (operator === 'greaterThan') {
        return userData[field] > value;
    }
    // Add other operators as needed
    return false; // Default to false for unhandled cases
}

function evaluateRule(rule, userData) {
    if (rule.operator === 'AND') {
        return rule.conditions.every(condition => evaluateSingleCondition(condition, userData));
    }
    // Handle other operators as needed
    return false;
}

function combineRules(rules) {
    // Logic to combine multiple rules into a single rule
    return {
        operator: 'AND',
        conditions: rules.flatMap(rule => rule.conditions)
    };
}

module.exports = { evaluateSingleCondition, evaluateRule, combineRules };
