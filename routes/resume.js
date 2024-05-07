const express = require("express");
const router = express.Router();
const ResumeModel = require("../models/resume");

router.post("/create", async (req, res) => {
  console.log("req recieved");
  const { contact, education, experience, project, userEmail } = req.body;
  try {
    const Resume = new ResumeModel({
      userEmail,
      contact,
      education,
      experience,
      project,
    });
    await Resume.save()
      .then(() => res.status(201).json("Resume Created"))
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(401).json("Server Error");
  }
});
router.post("/update", async (req, res) => {
  const { contact, education, experience, project } = req.body;
  try {
    const Resume = new ResumeModel({});
    await Resume.save()
      .then(() => res.status(201).json("Resume Created"))
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(401).json("Server Error");
  }
});

// // Get blog by tag
// router.get("/bytag", async (req, res) => {
//   try {
//     const query = req.query.tag;
//     await ResumeModel.find({ tag: { $regex: query, $options: "i" } })
//       .then((data) => res.status(201).json(data))
//       .catch((err) => console.log(err));
//   } catch (err) {
//     res.status(401).json("Server Error");
//   }
// });

// // Get blog by tag, disp, title
// // router.get("/byparams", async (req, res) => {
// //   try{
// //     await ResumeModel.find({$or: [{tag: {$regex: req.query.tag, $options:"i"}}, {title: {$regex: req.query.title, $options:"i"}}, {disp: {$regex: req.query.disp, $options:"i"}}]}).then((data)=>res.status(201).json(data)).catch((err)=>console.log(err))

// //    }catch(err){ res.status(401).json("Server Error")}
// // });

router.get("/all/:id", async (req, res) => {
  try {
    await ResumeModel.find({ userEmail: req.params.id })
      .then((data) => res.status(201).json(data))
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(401).json("Server Error");
  }
});
router.get("/:id", async (req, res) => {
  try {
    await ResumeModel.findOne({ _id: req.params.id })
      .then((data) => res.status(201).json(data))
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(401).json("Server Error");
  }
});
router.post("/update/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    await ResumeModel.findByIdAndUpdate(req.params.id, req.body)
      .then((data) => res.status(201).json(data))
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(401).json("Server Error");
  }
});

// // Get blog by id
// router.get("/:id", async (req, res) => {
//   try {
//     await ResumeModel.find({ metadata: req.params.id })
//       .then((data) => res.status(201).json(data))
//       .catch((err) => console.log(err));
//   } catch (err) {
//     res.status(401).json("Server Error");
//   }
// });

// // Update
// router.post("/update/:id", async (req, res) => {
//   try {
//     await ResumeModel.findByIdAndUpdate(req.params.id, req.body)
//       .then((data) => res.status(201).json(data))
//       .catch((err) => console.log(err));
//   } catch (err) {
//     res.status(401).json("Server Error");
//   }
// });

module.exports = router;
