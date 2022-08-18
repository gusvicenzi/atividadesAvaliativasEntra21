import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm"
import { Carrinho } from "./Carrinho";
import { Cliente } from "./Cliente";

@Entity()
export class Venda {
    @PrimaryGeneratedColumn()
    idVenda: number

    @Column()
    data: string

    @Column()
    status: string

    @OneToOne(() => Venda)
    @JoinColumn({name: 'id_cliente'})
    cliente: Cliente

    @OneToMany(() => Carrinho, carrinho => carrinho.venda)
    public carrinho!: Carrinho[];
}