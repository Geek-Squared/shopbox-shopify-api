export declare const OrderStatus: {
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly CONFIRMED: "CONFIRMED";
    readonly FULFILLED: "FULFILLED";
    readonly CANCELLED: "CANCELLED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly SUCCESS: "SUCCESS";
    readonly FAILED: "FAILED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const MessageDirection: {
    readonly INBOUND: "INBOUND";
    readonly OUTBOUND: "OUTBOUND";
};
export type MessageDirection = (typeof MessageDirection)[keyof typeof MessageDirection];
export declare const OtpPurpose: {
    readonly SELLER_LOGIN: "SELLER_LOGIN";
    readonly SELLER_REGISTER: "SELLER_REGISTER";
    readonly BUYER_ORDER: "BUYER_ORDER";
    readonly RIDER_LOGIN: "RIDER_LOGIN";
};
export type OtpPurpose = (typeof OtpPurpose)[keyof typeof OtpPurpose];
export declare const VehicleType: {
    readonly BICYCLE: "BICYCLE";
    readonly MOTORBIKE: "MOTORBIKE";
    readonly CAR: "CAR";
    readonly WALKING: "WALKING";
};
export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType];
export declare const DeliveryStatus: {
    readonly LOOKING_FOR_RIDER: "LOOKING_FOR_RIDER";
    readonly RIDER_ASSIGNED: "RIDER_ASSIGNED";
    readonly PICKED_UP: "PICKED_UP";
    readonly IN_TRANSIT: "IN_TRANSIT";
    readonly DELIVERED: "DELIVERED";
    readonly FAILED: "FAILED";
};
export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus];
export declare const EarningType: {
    readonly DELIVERY_PAYOUT: "DELIVERY_PAYOUT";
    readonly BONUS: "BONUS";
    readonly WITHDRAWAL: "WITHDRAWAL";
};
export type EarningType = (typeof EarningType)[keyof typeof EarningType];
export declare const EarningStatus: {
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly CANCELLED: "CANCELLED";
};
export type EarningStatus = (typeof EarningStatus)[keyof typeof EarningStatus];
