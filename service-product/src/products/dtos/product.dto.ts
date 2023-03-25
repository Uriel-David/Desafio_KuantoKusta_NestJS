import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDto {
    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsNotEmpty()
    @IsNumber()
    public price: number;
}