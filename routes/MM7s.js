const router = require("express").Router()
const MM7Ctrl = require("../controllers/MM7Controller")
const isAuthenticated = require("../controllers/isAuthenticated")



router.use(isAuthenticated)


router.get("/", MM7Ctrl.index)
router.get("/new", MM7Ctrl.newForm)
router.post("/", MM7Ctrl.create)
// router.get("/seed", MM7Ctrl.seed)
router.get("/:id", MM7Ctrl.show)
router.delete("/:id", MM7Ctrl.destroy)
router.get("/:id/edit", MM7Ctrl.edit)
router.put("/:id", MM7Ctrl.update)

module.exports = router