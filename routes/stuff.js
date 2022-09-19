const express = require("express");
const router = express.Router();

const stuffCtrl = require("../controllers/stuff");

router.post("/", stuffCtrl.creaThing);
router.put("/:id", stuffCtrl.modifyThing);
router.delete("/:id", stuffCtrl.deleteThing);
router.use("/:id", stuffCtrl.getOneThing);
router.use("/", stuffCtrl.getAllThing);

module.exports = router;
