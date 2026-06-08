const express = require("express");
const shortid = require("shortid");

const Url = require("../models/Url");

const router = express.Router();

router.post("/shorten", async (req, res) => {

    const { originalUrl } = req.body;

    try {

        const shortCode = shortid.generate();

        const newUrl = new Url({
            originalUrl,
            shortCode
        });

        await newUrl.save();

        res.json({
            message: "Short URL created successfully",
            shortUrl: `http://localhost:5000/${shortCode}`
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

router.get("/:code", async (req, res) => {

    try {

        const url = await Url.findOne({
            shortCode: req.params.code
        });

        if (url) {

            return res.redirect(url.originalUrl);

        } else {

            return res.status(404).json({
                message: "URL not found"
            });

        }

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

module.exports = router;