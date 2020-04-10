//rest-routes.ts
import * as Router from 'koa-router';
import controller = require('controllers');

export const restRouter = new Router();

//Routes for the user entity
restRouter.get('/players', controller.players.getPlayers);             //Get all users in the database
restRouter.get('/players/:id', controller.players.getPlayer);
restRouter.post('/players', controller.players.createPlayer);
restRouter.put('/players/:id', controller.players.updatePlayer);
restRouter.delete('/players/:id', controller.players.deletePlayer);