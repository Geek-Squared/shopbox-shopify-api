"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningStatus = exports.EarningType = exports.DeliveryStatus = exports.VehicleType = exports.OtpPurpose = exports.MessageDirection = exports.PaymentStatus = exports.OrderStatus = void 0;
exports.OrderStatus = {
    PENDING: 'PENDING',
    PAID: 'PAID',
    CONFIRMED: 'CONFIRMED',
    FULFILLED: 'FULFILLED',
    CANCELLED: 'CANCELLED'
};
exports.PaymentStatus = {
    PENDING: 'PENDING',
    SUCCESS: 'SUCCESS',
    FAILED: 'FAILED'
};
exports.MessageDirection = {
    INBOUND: 'INBOUND',
    OUTBOUND: 'OUTBOUND'
};
exports.OtpPurpose = {
    SELLER_LOGIN: 'SELLER_LOGIN',
    SELLER_REGISTER: 'SELLER_REGISTER',
    BUYER_ORDER: 'BUYER_ORDER',
    RIDER_LOGIN: 'RIDER_LOGIN'
};
exports.VehicleType = {
    BICYCLE: 'BICYCLE',
    MOTORBIKE: 'MOTORBIKE',
    CAR: 'CAR',
    WALKING: 'WALKING'
};
exports.DeliveryStatus = {
    LOOKING_FOR_RIDER: 'LOOKING_FOR_RIDER',
    RIDER_ASSIGNED: 'RIDER_ASSIGNED',
    PICKED_UP: 'PICKED_UP',
    IN_TRANSIT: 'IN_TRANSIT',
    DELIVERED: 'DELIVERED',
    FAILED: 'FAILED'
};
exports.EarningType = {
    DELIVERY_PAYOUT: 'DELIVERY_PAYOUT',
    BONUS: 'BONUS',
    WITHDRAWAL: 'WITHDRAWAL'
};
exports.EarningStatus = {
    PENDING: 'PENDING',
    PAID: 'PAID',
    CANCELLED: 'CANCELLED'
};
//# sourceMappingURL=enums.js.map