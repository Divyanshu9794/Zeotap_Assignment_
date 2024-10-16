const express = require('express');
const router = express.Router();
const { evaluateRule, combineRules } = require('../utils/ruleEvaluator');
const Rule = require('../models/Rule'); // Ensure this points to your correct model

router.post('/evaluate', async (req, res) => {
    const { userData } = req.body; // userData should match the structure in MongoDB

    try {
        // Fetch the rules from the database
        const rules = await Rule.find(); // Ensure this retrieves the correct rules

        const ruleAST = combineRules(rules);

        // Validate rules before evaluating
        if (!ruleAST || !ruleAST.conditions) {
            return res.status(400).json({ message: "Invalid rules structure" });
        }

        const isEligible = evaluateRule(ruleAST, userData);
        return res.status(200).json({ isEligible });
    } catch (error) {
        console.error("Error checking eligibility:", error);
        return res.status(500).json({ message: "Error checking eligibility. Please try again." });
    }
});

module.exports = router;
