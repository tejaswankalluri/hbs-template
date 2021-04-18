const express = require("express")
const router = express()
const templatepath = require("app-root-path").resolve("/template/views")
// views engine
router.set("views", templatepath)

module.exports = router
