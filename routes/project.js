const express = require("express");
const router = express.Router();
const ProjectModel = require("../models/project");


router.post("/", async (req, res) => {
    try{
        const Project = new ProjectModel({
           title: req.body.title,
           disp: req.body.disp,
           tech: req.body.tech,
           img: req.body.img,
           project_url: req.body.project_url,
           code_url: req.body.code_url,
           category: req.body.code_url,
           minsOfRead: req.body.minsOfRead,
           stack:req.body.stack
        })
      await Project.save().then(()=>res.status(201).json("Project Created")).catch((err)=>console.log(err))
 
     }catch(err){ res.status(401).json("Server Error")}
});

router.get("/", async (req, res) => {
   try{

     await ProjectModel.find({}).then((data)=>res.status(201).json(data)).catch((err)=>console.log(err))

    }catch(err){ res.status(401).json("Server Error")}
});

// like project
router.put("/like/:id", async (req, res) => {
   try{

     await ProjectModel.findByIdAndUpdate(req.params.id,{$inc: {likes: 1}}).then((data)=>res.status(201).json(data)).catch((err)=>console.log(err))
     
    }catch(err){ res.status(401).json("Server Error")}
});

// views
router.put("/views/:id", async (req, res) => {
   try{

     await ProjectModel.findByIdAndUpdate(req.params.id,{$inc: {views: 1}}).then((data)=>res.status(201).json(data)).catch((err)=>console.log(err))

    }catch(err){ res.status(401).json("Server Error")}
});


router.get("/:id", async (req, res) => {
   try{

     await ProjectModel.findById(req.params.id).then((data)=>res.status(201).json(data)).catch((err)=>console.log(err))

    }catch(err){ res.status(401).json("Server Error")}
});



module.exports = router