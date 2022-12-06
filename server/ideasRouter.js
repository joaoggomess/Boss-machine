const ideasRouter = require('express').Router();
const { getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId } = require('./db')
const checkMillionDollarIdea = require('./checkMillionDollarIdea')

module.exports = ideasRouter;


ideasRouter.param('id', (req, res, next, id) =>{
    const idea = getFromDatabaseById('ideas', id);

    if(idea) {
        req.idea = idea;
        next();
    } else {
        res.status(404).send();
    }
});

//get all ideas
ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
});

//Create a new idea
ideasRouter.post('/', (req, res, next) => {
    const ideaToAdd = req.body;
    const newIdea = addToDatabase('ideas', ideaToAdd);
    res.status(201).send( newIdea );  
});

//Get an idea by Id
ideasRouter.get('/:id', (req, res, next) => {
    res.send(req.idea);
})

//update and idea by id
ideasRouter.put('/:id', (req, res, next) =>{
    const updatedIdea = updateInstanceInDatabase('ideas', req.body);
    res.send(updatedIdea);
});

ideasRouter.delete('/:id', (req, res, next) => {
    const deletedIdea = deleteFromDatabasebyId('ideas', req.params.id);

    if(deletedIdea) {
        res.status(204);
    } else {
        res.status(504);
    }

    res.send();
});