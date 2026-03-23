# PluginsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**pluginsControllerDelivery**](PluginsApi.md#pluginscontrollerdelivery) | **POST** /api/plugins/delivery |  |
| [**pluginsControllerList**](PluginsApi.md#pluginscontrollerlist) | **GET** /api/plugins |  |
| [**pluginsControllerRiders**](PluginsApi.md#pluginscontrollerriders) | **POST** /api/plugins/delivery/riders |  |



## pluginsControllerDelivery

> pluginsControllerDelivery(deliveryDto)



### Example

```ts
import {
  Configuration,
  PluginsApi,
} from '@shopbox/shopbox-sdk';
import type { PluginsControllerDeliveryRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PluginsApi(config);

  const body = {
    // DeliveryDto
    deliveryDto: ...,
  } satisfies PluginsControllerDeliveryRequest;

  try {
    const data = await api.pluginsControllerDelivery(body);
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
| **deliveryDto** | [DeliveryDto](DeliveryDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## pluginsControllerList

> pluginsControllerList()



### Example

```ts
import {
  Configuration,
  PluginsApi,
} from '@shopbox/shopbox-sdk';
import type { PluginsControllerListRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PluginsApi(config);

  try {
    const data = await api.pluginsControllerList();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## pluginsControllerRiders

> pluginsControllerRiders(ridersDto)



### Example

```ts
import {
  Configuration,
  PluginsApi,
} from '@shopbox/shopbox-sdk';
import type { PluginsControllerRidersRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PluginsApi(config);

  const body = {
    // RidersDto
    ridersDto: ...,
  } satisfies PluginsControllerRidersRequest;

  try {
    const data = await api.pluginsControllerRiders(body);
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
| **ridersDto** | [RidersDto](RidersDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

