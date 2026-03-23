# AuthApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authControllerLogin**](AuthApi.md#authcontrollerlogin) | **POST** /api/auth/login |  |
| [**authControllerLogout**](AuthApi.md#authcontrollerlogout) | **POST** /api/auth/logout |  |
| [**authControllerOtp**](AuthApi.md#authcontrollerotp) | **POST** /api/auth/otp |  |
| [**authControllerRegister**](AuthApi.md#authcontrollerregister) | **POST** /api/auth/register |  |



## authControllerLogin

> authControllerLogin(loginDto)



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '@shopbox/shopbox-sdk';
import type { AuthControllerLoginRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const api = new AuthApi();

  const body = {
    // LoginDto
    loginDto: ...,
  } satisfies AuthControllerLoginRequest;

  try {
    const data = await api.authControllerLogin(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loginDto** | [LoginDto](LoginDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authControllerLogout

> authControllerLogout(logoutDto)



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '@shopbox/shopbox-sdk';
import type { AuthControllerLogoutRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const api = new AuthApi();

  const body = {
    // LogoutDto
    logoutDto: ...,
  } satisfies AuthControllerLogoutRequest;

  try {
    const data = await api.authControllerLogout(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **logoutDto** | [LogoutDto](LogoutDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authControllerOtp

> authControllerOtp(otpDto)



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '@shopbox/shopbox-sdk';
import type { AuthControllerOtpRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const api = new AuthApi();

  const body = {
    // OtpDto
    otpDto: ...,
  } satisfies AuthControllerOtpRequest;

  try {
    const data = await api.authControllerOtp(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **otpDto** | [OtpDto](OtpDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authControllerRegister

> authControllerRegister(registerDto)



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '@shopbox/shopbox-sdk';
import type { AuthControllerRegisterRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const api = new AuthApi();

  const body = {
    // RegisterDto
    registerDto: ...,
  } satisfies AuthControllerRegisterRequest;

  try {
    const data = await api.authControllerRegister(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **registerDto** | [RegisterDto](RegisterDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

