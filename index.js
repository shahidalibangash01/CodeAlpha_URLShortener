const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const urlRoutes = require("./routes/Url");
const Url = require("./models/Url");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.use("/api", urlRoutes);

app.get("/:shortCode", async (req, res)=> {
    try {
        const url = await Url.findOne({ shortCode: req.params.shortCode});
        if(!url){
            return res.status(404).json({ error: "URL Not Found"});
        }

        url.clicks++;
        await url.save();

        res.redirect(url.originalUrl);
    } catch (error) {
        res.status(500).json({error: "Server error" });
    }

});

const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=> console.log(` server listing on port ${ PORT }`));