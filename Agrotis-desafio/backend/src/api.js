import { DataCollection } from "./Data";

const save = (name, description, res) => {
  if (!name || !description) {
    return res.json({
      success: false,
      error: "Entradas Invalidas"
    });
  }

  const Collection = new DataCollection({
    description,
    name
  });

  Collection.save(err => {
    if (err) return res.json({ success: false, error: err });

    return res.json({ success: true });
  });
};

const get = async (res, key) => {

  const totalDoc = await DataCollection.count();
  const calc = Math.ceil(totalDoc / 5);

  let page = key;
  let limit = 5;
  let skip = limit * (page - 1);

  DataCollection.find({}, (err, data) => {
    if (err) return res.json({ success: false, error: err });

    return res.json({
      success: true,
      data: data,
      totalDoc: calc
    });
  })
    .skip(skip)
    .limit(5)
    .sort({ _id: -1 });
};

module.exports = {
  save,
  get
};
