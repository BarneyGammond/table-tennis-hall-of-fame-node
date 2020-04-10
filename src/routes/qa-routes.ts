import * as Router from 'koa-router';
import createTestData = require('qa/createTestData');

export const qaRouter = new Router();

//Routes for the user entity
qaRouter.post('/qa/players', createTestData.TestData.createTestPlayers);          
//Create some test users