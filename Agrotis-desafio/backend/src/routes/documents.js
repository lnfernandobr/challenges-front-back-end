const express = require("express");
const router = express.Router();
import { controllers } from "../controllers/documents";

router.post("/save", controllers.save);
router.get("/get/:id", controllers.get);

module.exports = router;
