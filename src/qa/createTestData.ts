import { BaseContext } from 'koa';
import { getConnection } from "typeorm";
import { Player } from 'models/player';
//Creating a class so we can later extend it to include creation of more test data
export class TestData {
    //This handles creating test users. Seperate functions can be added for other test data later.
    public static async createTestPlayers(ctx: BaseContext) {
        try {
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Player)
                .values([
                    { name: "Michael", tournaments_won: 3, points_won: 84, points_conceded: 12 },
                    { name: "Louise", tournaments_won: 1, points_won: 36, points_conceded: 18 },
                    { name: "Mary", tournaments_won: 2, points_won: 57, points_conceded: 9 }
                ])
                .execute();
            //Return a success message if theer are no errors
            ctx.body = "Test users created successfully"

            //Catch any errors and return a 500 error status to the user is there are errors
        } catch (err) {
            // will only respond with JSON
            ctx.status = err.statusCode || err.status || 500;
            ctx.body = {
                message: err.message
            };
        };
    };
};
