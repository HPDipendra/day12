import { DataSource } from 'typeorm'
import "reflect-metadata"
import User from '../models/userModel'


export default new DataSource({

    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: "root",
    password: "dipendra@1",
    database: 'Typeorm',
    synchronize:false,
    logging: true,
    entities: [User]

})