const User = require("../models/User");

//index - listar tofdas
//show - unica sessao,
//store - salvar
//uptade - alterar

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    //  const user = await User.create({ email });

    return res.json(user);
  }
};
