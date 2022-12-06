const meetingsRouter = require('express').Router();
const { getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId, 
    createMeeting,
    deleteAllFromDatabase} = require('./db')

module.exports = meetingsRouter;

meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req, res, next) =>{
    let newMeeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeeting);
});

meetingsRouter.delete('/', (req, res, next) =>{
    const deleted = deleteAllFromDatabase('meetings');
    res.status(204).send(deleted);
});
