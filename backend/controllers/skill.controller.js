const { Skill } = require("../models/skill.model");

const createSkill = async (req, res) => {
  const { name } = req.body;

  try {
    const createdSkill = await Skill.create({ name });

    return res.status(200).json(createdSkill);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find();

    return res.status(200).json(skills);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const updateSkillById = async (req, res) => {
  const { id } = req.params;

  const { name } = req.body;

  try {
    const updatedSKill = await Skill.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    return res.status(200).json(updatedSKill);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const deleteSkillById = async (req, res) => {
  const { id } = req.params;

  try {
    await Skill.findByIdAndDelete(id);

    return res.status(200).send("Skill deleted successfully!");
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

module.exports = {
  createSkill,
  getAllSkills,
  updateSkillById,
  deleteSkillById,
};
