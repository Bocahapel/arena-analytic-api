const express = require("express");
const router = express.Router();
const { getPlayers } = require("../controllers/player.controller");

router.get("/", getPlayers);

module.exports = router;
