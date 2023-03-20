const router = require("express").Router();
const petController = require('../controllers/petController');

router.post("/", petController.pet_create);
router.get("/", petController.pet_all);
router.get("/:petId", petController.pet_details);
router.put("/:petId", petController.pet_update);
router.delete("/:petId", petController.pet_delete);
//router.delete("/", petController.pet_delall);

module.exports = router;
