# PaymentsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**paymentsControllerInitiate**](PaymentsApi.md#paymentscontrollerinitiate) | **POST** /api/payments/initiate |  |
| [**paymentsControllerVerify**](PaymentsApi.md#paymentscontrollerverify) | **POST** /api/payments/verify |  |
| [**paymentsControllerWebhook**](PaymentsApi.md#paymentscontrollerwebhook) | **POST** /api/payments/webhook |  |



## paymentsControllerInitiate

> paymentsControllerInitiate(initiatePaymentDto)



### Example

```ts
import {
  Configuration,
  PaymentsApi,
} from '@shopbox/shopbox-sdk';
import type { PaymentsControllerInitiateRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const api = new PaymentsApi();

  const body = {
    // InitiatePaymentDto
    initiatePaymentDto: ...,
  } satisfies PaymentsControllerInitiateRequest;

  try {
    const data = await api.paymentsControllerInitiate(body);
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
| **initiatePaymentDto** | [InitiatePaymentDto](InitiatePaymentDto.md) |  | |

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


## paymentsControllerVerify

> paymentsControllerVerify(verifyPaymentDto)



### Example

```ts
import {
  Configuration,
  PaymentsApi,
} from '@shopbox/shopbox-sdk';
import type { PaymentsControllerVerifyRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const api = new PaymentsApi();

  const body = {
    // VerifyPaymentDto
    verifyPaymentDto: ...,
  } satisfies PaymentsControllerVerifyRequest;

  try {
    const data = await api.paymentsControllerVerify(body);
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
| **verifyPaymentDto** | [VerifyPaymentDto](VerifyPaymentDto.md) |  | |

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


## paymentsControllerWebhook

> paymentsControllerWebhook(paymentWebhookDto)



### Example

```ts
import {
  Configuration,
  PaymentsApi,
} from '@shopbox/shopbox-sdk';
import type { PaymentsControllerWebhookRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const api = new PaymentsApi();

  const body = {
    // PaymentWebhookDto
    paymentWebhookDto: ...,
  } satisfies PaymentsControllerWebhookRequest;

  try {
    const data = await api.paymentsControllerWebhook(body);
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
| **paymentWebhookDto** | [PaymentWebhookDto](PaymentWebhookDto.md) |  | |

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

