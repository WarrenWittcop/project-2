const router = require("express").Router()
const MM7Ctrl = require("../controllers/MM7Controller")
const isAuthenticated = require("../controllers/isAuthenticated")



router.use(isAuthenticated)


// router.get("/", MM7Ctrl.index)
router.get("/new", MM7Ctrl.newForm)
// router.post("/", MM7Ctrl.create)
// router.get("/seed", MM7Ctrl.seed)
// router.get("/", MM7Ctrl.show)
// router.delete("/", MM7Ctrl.destroy)
// router.get("/", MM7Ctrl.edit)
// router.put("/", MM7Ctrl.update)

module.exports = router