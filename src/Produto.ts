import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Carrinho } from "./Carrinho"

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    idProduto: number

    @Column()
    descricap: string

    @Column()
    preco: number
    
    @Column()
    estoque: number

    @OneToMany(() => Carrinho, carrinho => carrinho.produto)
    public carrinho!: Carrinho[];
}