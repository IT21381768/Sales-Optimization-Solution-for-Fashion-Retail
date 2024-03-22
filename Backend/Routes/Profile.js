const router = require("express").Router();
const { User } = require("../Model/User");

router.get("/profile", async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).send({ message: "Unauthorized" });
        }

        const userProfile = await User.findById(req.user._id);

        if (!userProfile) {
            return res.status(404).send({ message: "User profile not found" });
        }

        res.status(200).send(userProfile);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = router;
