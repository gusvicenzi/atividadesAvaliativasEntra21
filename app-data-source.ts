import { DataSource } from "typeorm"
import { Carrinho } from "./src/Carrinho"
import { Cliente } from "./src/Cliente"
import { Produto } from "./src/Produto"
import { Venda } from "./src/Venda"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [Cliente, Venda, Carrinho, Produto],
    logging: false,
    synchronize: true,
})