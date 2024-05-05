const {Skill} = require('../models/skill.model')

const createSkill = async (req,res) => {
    const {name} = req.body

    try{
        const createdSkill = await Skill.create({name})

        return res.status(200).json(createdSkill)
    }catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
}



module.exports = {
    createSkill,

}