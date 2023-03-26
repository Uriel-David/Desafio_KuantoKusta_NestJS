import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CartDto {
    @IsUUID()
    shoppingCartId?: string;

    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsNumber()
    totalPrice?: number;

    @IsNumber()
    totalQuantity?: number;

    @IsArray()
    products: any[];

    @IsDateString()
    createdAt?: string;

    @IsDateString()
    updatedAt?: string;
}