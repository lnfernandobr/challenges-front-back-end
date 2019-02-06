import API from "../api";

const save = async (req, res) => {
  const { name, description } = req.body;
  API.save(name, description, res);
};

const get = async (req, res) => {
  const key = Number(req.params.id);

  API.get(res, key);
};

export const controllers = {
  save,
  get
};
