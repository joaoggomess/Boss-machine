const minionsRouter = require('express').Router();
const { getAllFromDatabase,
        getFromDatabaseById,
        addToDatabase,
        updateInstanceInDatabase,
        deleteFromDatabasebyId } = require('./db')

module.exports = minionsRouter;

minionsRouter.param('minionId', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);

    if(minion) {
        req.minion = minion; 
        next();
    } else {
        res.status(404).send();
    }
})


//Get minions from database
minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
});

//Create a new minion
minionsRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send( newMinion );
});

//Get an a minion by id
minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
});

//Altering a minon by id
minionsRouter.put('/:minionId', (req, res, next) => {
    const updatedMinion = updateInstanceInDatabase( 'minions', req.body);
    res.send(updatedMinion);
});

//Deleting a minion by id
minionsRouter.delete('/:minionId', (req, res, next) => {
   const deleted = deleteFromDatabasebyId('minions', req.params.minionId )

   if(deleted) {
    res.status(204);
   } else {
    res.status(500);
   }
   res.send();
});