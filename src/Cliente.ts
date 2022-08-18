import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm"

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    idCliente: number

    @Column()
    nome: string

    @Column()
    fone: string

    @Column()
    email: string
}