import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() 
export class Location {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('float')
    x: number;

    @Column('float')
    y: number;

    @Column({ name: 'userId' })
    userId: number;

    @Column('datetime')
    Time: Date;

    @Column({ name: 'PlmnId' })
    PlmnId: number;

    @Column({ name: 'tac-lac' })
    tacLac: number; // Note: Special handling for hyphenated column name

    @Column()
    power: number;

    @Column()
    quality: number;
}