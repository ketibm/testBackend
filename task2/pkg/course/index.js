const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  academy_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Academy",
  },

  name: {
    type: String,
    required: [true, "Path `name` is required."],
  },

  area: {
    type: String,
    required: [true, "Path `area` is required."],
  },
});

const Course = mongoose.model("Course", courseSchema, "kursevi");

const create = async (data) => {
  const course = new Course(data);
  return await course.save();
};

const getOne = async (academy_id, id) => {
  return await Course.findOne({ _id: id, academy_id }).populate(
    "academy",
    "name",
    "address"
  );
};

const getAll = async (academy_id) => {
  return await Course.find({ academy_id }).populate(
    "academy",
    "name",
    "address"
  );
};

const update = async (id, data) => {
  return await Course.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return await Course.deleteOne({ _id: id });
};

const getAllByAcademyId = async (academyId) => {
  try {
    return await Course.find({ academy: academyId });
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
  getAllByAcademyId,
};
