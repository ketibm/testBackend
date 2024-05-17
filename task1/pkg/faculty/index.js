const mongoose = require("mongoose");

const facultySchema = mongoose.Schema({
  university: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "University",
  },
  name: {
    type: String,
    required: [true, "Path `name` is required."],
  },
  address: {
    type: String,
    required: [true, "Path `address` is required."],
  },
});

const Faculty = mongoose.model("Faculty", facultySchema, "fakulteti");

const create = async (data) => {
  const faculty = new Faculty(data);
  return await faculty.save();
};

const getOne = async (id, university) => {
  return await Faculty.findOne({ _id: id, university }).populate("university");
};

const getAll = async (university) => {
  return await Faculty.find({ university }).populate("university");
};

const update = async (id, data) => {
  return await Faculty.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return await Faculty.deleteOne({ _id: id });
};

const getAllByUniversityId = async (universityId) => {
  try {
    return await Faculty.find({ university: universityId });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  create,
  getOne,
  getAll,
  update,
  remove,
  getAllByUniversityId,
};
