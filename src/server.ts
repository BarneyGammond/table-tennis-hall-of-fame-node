import {mysqlDB} from './databases/mysql-db';
import {qaRouter} from 'routes/qa-routes';
import {restRouter} from 'routes/rest-routes'
import * as bodyParser from 'koa-bodyparser'

var app = require('./app');

const bootstrap = async () => {

    await mysqlDB();

    app.use(bodyParser())

    //Respond with a message to all client requests
    app.use(qaRouter.routes(), qaRouter.allowedMethods());
    //Tell the app to listen on port 1234
    app.use(restRouter.routes(), restRouter.allowedMethods());

    app.listen(8000);
};

bootstrap();
