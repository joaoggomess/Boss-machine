const express = require('express');
const apiRouter = express.Router();

//Routers
minionsRouter = require('./minionsRouter');
ideasRouter = require('./ideasRouter');
meetingsRouter = require('./meetingsRouter')

//Router paths
apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter);

module.exports = apiRouter;
