const profilePage = require("../controllers/profileControler")
const express = require("express");
const router = express.Router();



// console.log(UserPage)

router.post("/addprofile",profilePage.addprofile)
router.get("/getprofile",profilePage.getprofile)


router.delete("/deleteprofile/:id",profilePage.deleteprofile)
router.put("/updateprofile/:id",profilePage.updateprofile)







module.exports = router