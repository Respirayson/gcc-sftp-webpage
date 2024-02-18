import express from "express";

const router = express.Router();

router.route("/add").post((req, res) => {
    const { operand1, operand2 } = req.body;
    // console.log(req.headers)
    const result = parseFloat(operand1 || 0) + parseFloat(operand2 || 0);
    res.json({ result });
});

router.route("/subtract").post((req, res) => {
    const { operand1, operand2 }= req.body;
    // console.log(operand1, operand2)
    // console.log(req.headers)
    const result = parseFloat(operand1 || 0) - parseFloat(operand2 || 0);
    res.json({ result });
})

export default router;