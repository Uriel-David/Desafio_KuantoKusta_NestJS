import { IsNotEmpty } from "class-validator";
import { IsArray, IsNumber, IsString } from "class-validator/types/decorator/decorators";

export class CartDto {
    shoppingCartId?: string;

    @IsNotEmpty()
    @IsString()
    userId: string;

    @IsNotEmpty()
    @IsNumber()
    totalPrice: number;

    @IsNotEmpty()
    @IsNumber()
    totalQuantity: number;

    @IsNotEmpty()
    @IsArray()
    products: Array<string>;
}