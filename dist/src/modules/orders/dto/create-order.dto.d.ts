declare class CreateOrderItemDto {
    productId: string;
    quantity: number;
}
export declare class CreateOrderDto {
    storeSlug: string;
    customerName: string;
    customerPhone: string;
    customerEmail?: string;
    items: CreateOrderItemDto[];
}
export {};
