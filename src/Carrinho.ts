import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm"
import { Venda } from "./Venda"
import { Produto } from "./Produto"

@Entity()
export class Carrinho {
    @PrimaryGeneratedColumn()
    public idCarrinho!: number

    @Column()
    public quantidade!: number

    @Column()
    public preco!: number

    @ManyToOne(() => Venda, (venda) => venda.carrinho)
    @JoinColumn({name: 'id_venda'})
    public venda!: Venda

    @ManyToOne(() => Produto, (category) => category.carrinho)
    @JoinColumn({name: 'id_produto'})
    public produto!: Produto
}