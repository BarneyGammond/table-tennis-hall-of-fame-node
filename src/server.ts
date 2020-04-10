import {mysqlDB} from './databases/mysql-db';

var app = require('./app');

const bootstrap = async () => {

    await mysqlDB();
    
    //Respond with a message to all client requests
    app.use(async ctx => {
        ctx.body = "Welcome to my Server!";
    });
    //Tell the app to listen on port 1234
    app.listen(1234);
};

bootstrap();
