const newsPage = require("../controllers/newsControler")
const express = require("express");
const router = express.Router();



// console.log(UserPage)

router.post("/addnews",newsPage.addnews)
router.get("/getnews",newsPage.getnews)


router.delete("/deletenews/:id",newsPage.deletenews)
router.put("/updatenews/:id",newsPage.updatenews)







module.exports = router