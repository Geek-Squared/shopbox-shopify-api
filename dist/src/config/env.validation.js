"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envValidationSchema = void 0;
const Joi = require("joi");
exports.envValidationSchema = Joi.object({
    NODE_ENV: Joi.string()
        .valid('development', 'test', 'production')
        .default('development'),
    PORT: Joi.number().default(3000),
    DATABASE_URL: Joi.string().uri().required(),
    JWT_SECRET: Joi.string().min(32).required(),
    JWT_EXPIRES_IN: Joi.number().integer().positive().default(86400),
    SHOPIFY_API_KEY: Joi.string().required(),
    SHOPIFY_API_SECRET: Joi.string().required(),
    SHOPIFY_SCOPES: Joi.string().required(),
    APP_URL: Joi.string().uri().required(),
    META_APP_ID: Joi.string().optional(),
    META_APP_SECRET: Joi.string().optional(),
    META_VERIFY_TOKEN: Joi.string().optional(),
    TWILIO_ACCOUNT_SID: Joi.string().optional(),
    TWILIO_AUTH_TOKEN: Joi.string().optional(),
    RESEND_API_KEY: Joi.string().optional(),
});
//# sourceMappingURL=env.validation.js.map