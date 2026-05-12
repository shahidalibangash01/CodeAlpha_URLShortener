const express = require("express");
const router = express.Router();
const { nanoid } = require ("nanoid");
const Url = require("../models/Url");


router.post("/shorten", async (req, res)=>{
    const { originalUrl } = req.body;

    if (!originalUrl){
        return res.status(400).json({error:"Please Provide a URL "});

    }
    try{
        const shortCode = nanoid(6);
        const url = await Url.create({ originalUrl , shortCode});
        
        res.status(201).json({
            shortUrl: `${process.env.BASE_URL}/${shortCode}`,
            shortCode,
            originalUrl,
        });

    }catch(error) {
        res.status(500).json({error: "Server Error"});
    }

});



router.get("/stats/:shortCode", async (req, res) =>{
    try {
        const url = await Url.findOne({shortCode: req.params.shortCode});
        if(!url){
            return res.status(404).json({error:"URL Not Found"})
        };
        res.json({
            originalUrl: url.originalUrl,
            shortCode: url.shortCode,
            clicks: url.clicks,
            createdAt: url.createdAt,
        });

    } catch (error) {
        res.status(500).json({error:"Server error"})
    }

});


module.exports = router;

