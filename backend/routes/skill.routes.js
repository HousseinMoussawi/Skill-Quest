const express = require("express");

const{createSkill,
    getAllSkills,
    updateSkillById,
    deleteSkillById,} = require('../controllers/skill.controller')

const adminMiddleware = require('../middlewares/admin.middleware')
const playerMiddleware = require('../middlewares/player.middleware')
const authMiddleware = require('../middlewares/auth.middleware')
const creatorMiddleware = require('../middlewares/creator.middleware')

const router = express.Router()

router.post('/',authMiddleware,adminMiddleware,createSkill)
router.get('/',authMiddleware,getAllSkills)
router.put('/:id',authMiddleware,adminMiddleware,updateSkillById)
router.delete('/:id',authMiddleware,adminMiddleware,deleteSkillById)

module.exports = router


