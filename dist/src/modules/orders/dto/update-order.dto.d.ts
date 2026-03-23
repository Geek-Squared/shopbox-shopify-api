export declare class UpdateOrderDto {
    status?: 'PENDING' | 'PAID' | 'CONFIRMED' | 'FULFILLED' | 'CANCELLED';
    customerName?: string;
    customerPhone?: string;
}
