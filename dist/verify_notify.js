"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whatsapp_service_1 = require("./src/modules/whatsapp/whatsapp.service");
async function verify() {
    const mockConfig = {
        get: (key) => {
            if (key === 'WHATSAPP_PHONE_ID')
                return '123456789';
            if (key === 'WHATSAPP_TOKEN')
                return 'mock-token';
            return null;
        }
    };
    const mockPrisma = {
        whatsappMessage: {
            create: async (data) => {
                return data.data;
            }
        }
    };
    const service = new whatsapp_service_1.WhatsappService(mockConfig, mockPrisma);
    console.log('\n--- Verifying notifyBuyerOrderConfirmed ---');
    try {
        await service.notifyBuyerOrderConfirmed('263770000000', 'ORD-123', 'Test Store', 100.50, '4321', 'test-store');
    }
    catch (e) { }
    console.log('\n--- Verifying notifySellerNewOrder ---');
    try {
        await service.notifySellerNewOrder('263770000001', 'ORD-123', 'John Doe', '2x Bread, 1x Milk', 10.00, 'COD');
    }
    catch (e) { }
}
verify().catch(console.error);
//# sourceMappingURL=verify_notify.js.map