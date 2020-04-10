//import type definitions from typeorm that describe the physical 
//charachteristics of fields that we will store in the database
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
//Import functions from the class-valadiator package that we will
//use to validate data when someone is creating or editing a user
@Entity('players')
//Export the User class so we can use it elsewhere in our project
export class Player {
    @PrimaryGeneratedColumn()     //Tell Postgre to generate a Unique Key for this column
    id: number;                         //Name of the column is id and type is string
    @Column({type: 'varchar', length: 150})                     
    name: string;
    @Column('int')
    tournaments_won: number;
    @Column('int')
    points_won: number;
    @Column('int')
    points_conceded: number;
    
    /* @CreateDateColumn()
    createdAt: string;
    @UpdateDateColumn()
    updatedAt: string; */
}