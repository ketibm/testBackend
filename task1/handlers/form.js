const { create, getOne, getAll, update, remove } = require("../pkg/faculty");

const getForm = (req, res) => {
  res.render("form");
}; //   form.ejs

const getFaculties = async (req, res) => {
  try {
    const faculties = await getAll();
    res.render("faculty", { faculties });
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};

const postForm = async (req, res) => {
  try {
    await create(req.body);
    return res.redirect("/faculty");
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};

const deleteFaculties = async (req, res) => {
  try {
    await remove(req.query.index);
    return res.redirect("/faculty");
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};

const getUpdate = async (req, res) => {
  try {
    const faculty = await getOne(req.params.id);
    res.render("updatedForm", { faculty });
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};

const postUpdate = async (req, res) => {
  try {
    await update(req.params.id, req.body);
    return res.redirect("/faculty");
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getForm,
  postForm,
  getFaculties,
  deleteFaculties,
  getUpdate,
  postUpdate,
};
