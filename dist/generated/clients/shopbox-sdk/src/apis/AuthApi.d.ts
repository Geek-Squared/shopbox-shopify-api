import * as runtime from '../runtime';
import type { LoginDto, LogoutDto, OtpDto, RegisterDto } from '../models/index';
export interface AuthControllerLoginRequest {
    loginDto: LoginDto;
}
export interface AuthControllerLogoutRequest {
    logoutDto: LogoutDto;
}
export interface AuthControllerOtpRequest {
    otpDto: OtpDto;
}
export interface AuthControllerRegisterRequest {
    registerDto: RegisterDto;
}
export declare class AuthApi extends runtime.BaseAPI {
    authControllerLoginRequestOpts(requestParameters: AuthControllerLoginRequest): Promise<runtime.RequestOpts>;
    authControllerLoginRaw(requestParameters: AuthControllerLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    authControllerLogin(requestParameters: AuthControllerLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    authControllerLogoutRequestOpts(requestParameters: AuthControllerLogoutRequest): Promise<runtime.RequestOpts>;
    authControllerLogoutRaw(requestParameters: AuthControllerLogoutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    authControllerLogout(requestParameters: AuthControllerLogoutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    authControllerOtpRequestOpts(requestParameters: AuthControllerOtpRequest): Promise<runtime.RequestOpts>;
    authControllerOtpRaw(requestParameters: AuthControllerOtpRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    authControllerOtp(requestParameters: AuthControllerOtpRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    authControllerRegisterRequestOpts(requestParameters: AuthControllerRegisterRequest): Promise<runtime.RequestOpts>;
    authControllerRegisterRaw(requestParameters: AuthControllerRegisterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    authControllerRegister(requestParameters: AuthControllerRegisterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
