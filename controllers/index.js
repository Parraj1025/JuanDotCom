const router = require('express').Router();
const postRoutes = require('./api/postroute');
const userRoutes = require('./api/UserRoutes');
const path = require('path')
const express = require('express')
const app = express();
const expressLayouts = require('express-ejs-layouts')


router.use('/api', postRoutes);
router.use('/api', userRoutes);
router.use(express.static(path.join(__dirname, '../views')))

app.use(expressLayouts)
app.set('view engine','ejs')

router.get("/", (req,res) => {
    try {
        res.status(200).render(path.join(__dirname,"../views" , "index.html"))
    }
    catch (error) {
        res.send()
    }
})

module.exports = router

