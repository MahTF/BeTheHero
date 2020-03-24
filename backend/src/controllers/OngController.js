const crypto = require("crypto");
const cn = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await cn("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.json({ id });
  },

  async index(req, res) {
    const ongs = await cn("ongs").select("*");

    return res.json(ongs);
  }
};
