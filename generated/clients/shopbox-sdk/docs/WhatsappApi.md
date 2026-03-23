# WhatsappApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**whatsappControllerSend**](WhatsappApi.md#whatsappcontrollersend) | **POST** /api/whatsapp/send |  |
| [**whatsappControllerWebhook**](WhatsappApi.md#whatsappcontrollerwebhook) | **POST** /api/whatsapp/webhook |  |



## whatsappControllerSend

> whatsappControllerSend(sendWhatsappDto)



### Example

```ts
import {
  Configuration,
  WhatsappApi,
} from '@shopbox/shopbox-sdk';
import type { WhatsappControllerSendRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const api = new WhatsappApi();

  const body = {
    // SendWhatsappDto
    sendWhatsappDto: ...,
  } satisfies WhatsappControllerSendRequest;

  try {
    const data = await api.whatsappControllerSend(body);
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
| **sendWhatsappDto** | [SendWhatsappDto](SendWhatsappDto.md) |  | |

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


## whatsappControllerWebhook

> whatsappControllerWebhook(whatsappWebhookDto)



### Example

```ts
import {
  Configuration,
  WhatsappApi,
} from '@shopbox/shopbox-sdk';
import type { WhatsappControllerWebhookRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const api = new WhatsappApi();

  const body = {
    // WhatsappWebhookDto
    whatsappWebhookDto: ...,
  } satisfies WhatsappControllerWebhookRequest;

  try {
    const data = await api.whatsappControllerWebhook(body);
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
| **whatsappWebhookDto** | [WhatsappWebhookDto](WhatsappWebhookDto.md) |  | |

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

