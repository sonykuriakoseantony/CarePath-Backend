const rules = require('../model/rulesModel');
const jwt = require("jsonwebtoken");

// get all rules
exports.getAllRulesController = async (req, res) => {
    console.log("-------------Inside getAllRulesController-------------");

    try {
        const allRules = await rules.find();
        res.status(200).json(allRules)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// add rule
exports.addRuleController = async (req, res) => {
    console.log("-------------Inside addRuleController-------------");

    const { symptomKeywords, departmentId, priority, confidenceWeight } = req.body;
    console.log(symptomKeywords, departmentId, priority, confidenceWeight);

    try {
        console.log("Creating new Rule");
        const newRule = await rules.create({
            symptomKeywords, departmentId, priority, confidenceWeight
        })
        res.status(200).json(newRule)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// edit rule
exports.editRuleController = async (req, res) => {
    console.log("-------------Inside editRuleController-------------");

    const { id } = req.params
    const { symptomKeywords, departmentId, priority, confidenceWeight } = req.body;

    try {
        const ruleDetails = await rules.findByIdAndUpdate({ _id: id }, {
            symptomKeywords, departmentId, priority, confidenceWeight
        }, { new: true });
        res.status(200).json(ruleDetails)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// view rule
exports.getRuleByIdController = async (req, res) => {
    console.log("-------------Inside getRuleByIdController-------------");
    const { id } = req.params
    try {
        const ruleDetails = await rules.findById({ _id: id });
        res.status(200).json(ruleDetails)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// delete rule
exports.removeRuleController = async (req, res) => {
    console.log("-------------Inside removeRuleController-------------");
    const { id } = req.params
    try {
        const ruleDetails = await rules.findByIdAndDelete({ _id: id });
        res.status(200).json(ruleDetails)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}
