import { createConnection } from 'typeorm';
import { mysqlTables} from './mysql-tables'

export const mysqlDB = async () => {
    
    return await createConnection({
        type     : 'mysql',
        host     : 'vagrant.dev',
        username : 'vagrant',
        password : '',
        database : 'hall_of_fame',
        ssl: false,
        entities: mysqlTables,
        logging: ['query', 'error'],
        synchronize: true,
    }).then((connection) => {
        console.log('Database connection established');
        
    });
}
