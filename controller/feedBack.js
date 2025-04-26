const FeedBack = require("../model/feedBackSchema")

exports.saveFeedback = async (req, res) => {
    const { name, email, message, category } = req.body

    if (!name || !email || !message || !category) {
        return res.status(400).json({ message: "Data is Required" })
    }

    try {
        let feedData = await FeedBack.findOne({ email })

        // let saveData
        if (!feedData) {
            feedData = new FeedBack({
                name,
                email,
                feedbacks: [{ feedbackText: message, category }]
            });
        } else {
            feedData.feedbacks.push({ feedbackText: message, category });
        }

        await feedData.save();

        return res.status(200).json({ message: "Data is saved",})
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal Server error", error: err })
    }
}


exports.getFeedback = async (req, res) => {

    try {
        const feedData = await FeedBack.find({})

        if (!feedData) {
            return res.status(404).json({ message: "No feedback is found with this email" })
        }

        return res.status(200).json({ message: "Data fetched successfully", data: feedData})
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal Server error", error: err })
    }
}