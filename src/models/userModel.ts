import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    'id': number

    @Column({ "nullable": false })
    'userName': string

    @Column({ "nullable": false })
    'userAddress': string

    @Column({ "nullable": false })
    'userPhone': number

}
