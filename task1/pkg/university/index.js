const mongoose = require("mongoose");

const universitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  faculty: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Faculty",
    },
  ],
});

const University = mongoose.model(
  "University",
  universitySchema,
  "univerziteti"
);

const create = async (data) => {
  const university = new University(data);
  return await university.save();
};

const getOne = async (id) => {
  return await University.findOne({ _id: id });
};

const getAll = async () => {
  return await University.find({});
};

const update = async (id, data) => {
  return await University.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return await University.deleteOne({ _id: id });
};

module.exports = {
  create,
  getOne,
  getAll,
  update,
  remove,
};
