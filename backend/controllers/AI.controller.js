const  OpenAI  = require('openai')
require("dotenv").config();

const openai = new OpenAI(process.env)

const generateText = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `can you answer the following question only
           it is about learning new skills, and give advise about 
           how the skill in the question could be learnt, and can
            you please also give tips about how to learn the skill 
            faster if you are playing a game that is supposed to 
            teach this skill, without giving any links for any
             websites, the skill is : ${prompt}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    const generatedText = completion.choices[0].message.content;
    return res.status(200).json(generatedText);
  } catch (error) {
    console.error("Error generating text:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { generateText };
 