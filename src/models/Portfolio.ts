import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Product } from "./Product"
import { Worker } from "./Worker"

@Entity("portfolios")
export class Portfolio extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    tattoo_artist_id!: number

    @Column()
    product_id!: number

    @Column()
    created_at!: Date

    @Column()
    updated_at!: Date

    @ManyToOne(() => Worker, (worker) => worker.workerPortfolios)
    @JoinColumn({ name: "tattoo_artist_id" })
    workerPortfolio!: Worker[]

    @ManyToOne(() => Product, (product) => product.productPortfolios)
    @JoinColumn({ name: "product_id" })
    productPortfolio!: Product[]

}

