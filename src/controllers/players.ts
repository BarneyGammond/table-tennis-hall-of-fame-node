import { BaseContext, Context } from 'koa';
import { getManager, Repository, Not, Equal } from 'typeorm';
import { validate, ValidationError } from 'class-validator';
import { Player } from 'models/player'

export default class PlayerController {

    public static async getPlayers(ctx: BaseContext) {

        const playerRepository: Repository<Player> = getManager().getRepository(Player);

        const players: Player[] = await playerRepository.find();

        ctx.status = 200;
        ctx.body = players;

    }

    public static async getPlayer(ctx: Context) {
        // get a user repository to perform operations with user
        const playerRepository: Repository<Player> = getManager().getRepository(Player);
        // load user by id
        const player: Player = await playerRepository.findOne(ctx.params.id);
        if (player) {
            // return OK status code and loaded user object
            ctx.status = 200;
            ctx.body = player;
        } else {
            // return a BAD REQUEST status code and error message
            ctx.status = 400;
            ctx.body = 'The player you are trying to retrieve doesn\'t exist in the db';
        }
    }

    public static async createPlayer(ctx: Context) {
        // get a user repository to perform operations with user
        const playerRepository: Repository<Player> = getManager().getRepository(Player);

        // build up entity user to be saved
        const playerToBeSaved: Player = new Player();

        playerToBeSaved.name = ctx.request.body.name
        playerToBeSaved.tournaments_won = ctx.request.body.tournaments_won;
        playerToBeSaved.points_won = ctx.request.body.points_won;
        playerToBeSaved.points_conceded = ctx.request.body.points_conceded;
        //validate(ctx.request.body.name);
        // validate user entity
        const errors: ValidationError[] = await validate(playerToBeSaved, { skipMissingProperties: true }); // errors is an array of validation errors
        if (errors.length > 0) {
            // return BAD REQUEST status code and errors array
            ctx.status = 400;
            ctx.body = errors;
        } else {
            // save the user contained in the POST body
            const player = await playerRepository.save(playerToBeSaved);
            // return CREATED status code and updated user
            ctx.status = 201;
            ctx.body = player;
        }
    }

    public static async updatePlayer(ctx: Context) {
        // get a user repository to perform operations with user
        const playerRepository: Repository<Player> = getManager().getRepository(Player);
        // load the user by id
        const playerToBeUpdated: Player = await playerRepository.findOne(ctx.params.id);
        // return a BAD REQUEST status code and error message if the user cannot be found
        if (!playerToBeUpdated) {

            ctx.status = 400;
            ctx.body = 'The user you are trying to retrieve doesn\'t exist in the db';
        }

        if (ctx.request.body.name) { 
            playerToBeUpdated.name = ctx.request.body.name; 
        }
        if (ctx.request.body.tournaments_won) { 
            playerToBeUpdated.tournaments_won = ctx.request.body.tournaments_won; 
        }
        if (ctx.request.body.points_won) { 
            playerToBeUpdated.points_won = ctx.request.body.points_won; 
        }
        if (ctx.request.body.points_conceded) { 
            playerToBeUpdated.points_conceded = ctx.request.body.points_conceded; 
        }
        // validate user entity
        const errors: ValidationError[] = await validate(playerToBeUpdated); // errors is an array of validation errors
        if (errors.length > 0) {
            // return BAD REQUEST status code and errors array
            ctx.status = 400;
            ctx.body = errors;
        } else if (!await playerRepository.findOne(playerToBeUpdated.id)) {
            // check if a user with the specified id exists
            // return a BAD REQUEST status code and error message
            ctx.status = 400;
            ctx.body = 'The user you are trying to update doesn\'t exist in the db';
        } else {
            // save the user contained in the PUT body
            const player = await playerRepository.save(playerToBeUpdated);
            // return CREATED status code and updated user
            ctx.status = 201;
            ctx.body = player;
        }
    }

    public static async deletePlayer (ctx: Context) {
        // get a user repository to perform operations with user
        const playerRepository: Repository<Player> = getManager().getRepository(Player);
        // load the user by id
        const playerToRemove: Player = await playerRepository.findOne(ctx.params.id);
        if (!playerToRemove) {
            // return a BAD REQUEST status code and error message
            ctx.status = 400;
            ctx.body = 'The user you are trying to delete doesn\'t exist in the db';
        } else {
            // the user is there so can be removed
            await playerRepository.remove(playerToRemove);
            // return a NO CONTENT status code
            ctx.status = 204;
        }
    }

}