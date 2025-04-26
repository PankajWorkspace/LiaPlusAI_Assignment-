const express = require("express")
const router = express.Router()
const feedback = require("../controller/feedBack")

router.get("/get", feedback.getFeedback)

router.post("/save", feedback.saveFeedback)
module.exports = router