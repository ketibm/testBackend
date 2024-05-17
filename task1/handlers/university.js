const { create, getOne, getAll, update, remove } = require("../pkg/university");

const createUniversity = async (req, res) => {
  try {
    const newUniversity = await create(req.body);
    return res.status(200).send(newUniversity);
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};

const getOneUniversity = async (req, res) => {
  try {
    const university = await getOne(req.params.id);
    if (!university) {
      return res.status(404).send("University not found!");
    }
    return res.status(200).send(university);
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};

const getAllUniversities = async (req, res) => {
  try {
    const universities = await getAll();
    return res.status(200).send(universities);
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};

const updateUniversity = async (req, res) => {
  try {
    const updatedUniversity = await update(req.params.id, req.body);
    return res.status(200).send(updatedUniversity);
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};

const removeUniversity = async (req, res) => {
  try {
    await remove(req.params.id);
    return res.status(200).send("University deleted successfully!");
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createUniversity,
  getOneUniversity,
  getAllUniversities,
  updateUniversity,
  removeUniversity,
};
