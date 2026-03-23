"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
class AuthApi extends runtime.BaseAPI {
    async authControllerLoginRequestOpts(requestParameters) {
        if (requestParameters['loginDto'] == null) {
            throw new runtime.RequiredError('loginDto', 'Required parameter "loginDto" was null or undefined when calling authControllerLogin().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        let urlPath = `/api/auth/login`;
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.LoginDtoToJSON)(requestParameters['loginDto']),
        };
    }
    async authControllerLoginRaw(requestParameters, initOverrides) {
        const requestOptions = await this.authControllerLoginRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async authControllerLogin(requestParameters, initOverrides) {
        await this.authControllerLoginRaw(requestParameters, initOverrides);
    }
    async authControllerLogoutRequestOpts(requestParameters) {
        if (requestParameters['logoutDto'] == null) {
            throw new runtime.RequiredError('logoutDto', 'Required parameter "logoutDto" was null or undefined when calling authControllerLogout().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        let urlPath = `/api/auth/logout`;
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.LogoutDtoToJSON)(requestParameters['logoutDto']),
        };
    }
    async authControllerLogoutRaw(requestParameters, initOverrides) {
        const requestOptions = await this.authControllerLogoutRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async authControllerLogout(requestParameters, initOverrides) {
        await this.authControllerLogoutRaw(requestParameters, initOverrides);
    }
    async authControllerOtpRequestOpts(requestParameters) {
        if (requestParameters['otpDto'] == null) {
            throw new runtime.RequiredError('otpDto', 'Required parameter "otpDto" was null or undefined when calling authControllerOtp().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        let urlPath = `/api/auth/otp`;
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.OtpDtoToJSON)(requestParameters['otpDto']),
        };
    }
    async authControllerOtpRaw(requestParameters, initOverrides) {
        const requestOptions = await this.authControllerOtpRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async authControllerOtp(requestParameters, initOverrides) {
        await this.authControllerOtpRaw(requestParameters, initOverrides);
    }
    async authControllerRegisterRequestOpts(requestParameters) {
        if (requestParameters['registerDto'] == null) {
            throw new runtime.RequiredError('registerDto', 'Required parameter "registerDto" was null or undefined when calling authControllerRegister().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        let urlPath = `/api/auth/register`;
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.RegisterDtoToJSON)(requestParameters['registerDto']),
        };
    }
    async authControllerRegisterRaw(requestParameters, initOverrides) {
        const requestOptions = await this.authControllerRegisterRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async authControllerRegister(requestParameters, initOverrides) {
        await this.authControllerRegisterRaw(requestParameters, initOverrides);
    }
}
exports.AuthApi = AuthApi;
//# sourceMappingURL=AuthApi.js.map