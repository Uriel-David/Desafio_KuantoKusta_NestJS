import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn('uuid')
    shoppingCartId: string;

    @Column({ nullable: false })
    userId: string;

    @Column({ nullable: false })
    totalPrice: number;

    @Column({ nullable: false })
    totalQuantity: number;

    @Column('text', { nullable: true, array: true })
    products: any[];

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}