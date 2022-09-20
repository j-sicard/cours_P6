const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const stuffCtrl = require("../controllers/stuff");

router.post("/", auth, stuffCtrl.creaThing);
router.put("/:id", auth, stuffCtrl.modifyThing);
router.delete("/:id", auth, stuffCtrl.deleteThing);
router.use("/:id", auth, stuffCtrl.getOneThing);
router.use("/", auth, stuffCtrl.getAllThing);

module.exports = router;
