import { CreateProductImageDto } from './create-product-image.dto';
export declare class CreateProductDto {
    name: string;
    description?: string;
    price: number;
    currency?: string;
    stockQty?: number;
    images?: CreateProductImageDto[];
}
