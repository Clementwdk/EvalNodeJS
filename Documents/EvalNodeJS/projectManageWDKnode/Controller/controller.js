dateDebutconst Project = require('../model/Model.js');

exports.create = (req, res) => {
    if(!req.body.nom) {
        return res.status(400).send({
            message: "project content can not be empty"
        });
    }
    const project = new Project({
        nom: req.body.nom || "Untitled Project",
        dateDebut: req.body.dateDebut,
        dateFin:req.body.dateFin,
        client:req.body.client,
        total:req.body.total,
        statut:req.body.statut
    });
    project.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the project."
        });
    });
};

exports.findAll = (req, res) => {

    project.find()
    .then(projects => {
        res.send(projects);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving projects."
        });
    });
};

exports.findOne = (req, res) => {
    Project.findById(req.params.id)
   .then(project => {
       if(!project) {
           return res.status(404).send({
               message: "project not found with id " + req.params.id
           });
       }
       res.send(project);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Project not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving project with id " + req.params.id
       });
   });
};

exports.update = (req, res) => {

    if(!req.body.nom) {
        return res.status(400).send({
            message: "Project content can not be empty"
        });
    }

    Project.findByIdAndUpdate(req.params.id, {
        nom: req.body.nom || "Untitled Project",
        dateDebut: req.body.dateDebut,
        dateFin:req.body.dateFin
    }, {new: true})
    .then(project => {
        if(!project) {
            return res.status(404).send({
                message: "Project not found with id " + req.params.id
            });
        }
        res.send(project);
    }).catch(err => {
        if(err.kind === 'id') {
            return res.status(404).send({
                message: "project not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating project with id " + req.params.id
        });
    });

};

exports.delete = (req, res) => {
    Project.findByIdAndRemove(req.params.id)
    .then(project => {
        if(!project) {
            return res.status(404).send({
                message: "Project not found with id " + req.params.id
            });
        }
        res.send({message: "Project deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.nom === 'NotFound') {
            return res.status(404).send({
                message: "project not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete project with id " + req.params.id
        });
    });

};
