//rest-routes.ts
import * as Router from 'koa-router';
import controller = require('controllers');

export const restRouter = new Router();

//Routes for the user entity
restRouter.get('/api/players', controller.players.getPlayers);             //Get all users in the database
restRouter.get('/api/players/:id', controller.players.getPlayer);
restRouter.post('/api/players', controller.players.createPlayer);
restRouter.put('/api/players/:id', controller.players.updatePlayer);
restRouter.delete('/api/players/:id', controller.players.deletePlayer);