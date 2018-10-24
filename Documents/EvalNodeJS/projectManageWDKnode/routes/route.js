module.exports = (app) => {
    const project = require('../Controller/controller.js');

    app.post('/projects', project.create);

    app.get('/projects', project.findAll);

    app.get('/projects/:id', project.findOne);

    app.put('/projects/:id', project.update);

    app.delete('/projects/:id', project.delete);
}
