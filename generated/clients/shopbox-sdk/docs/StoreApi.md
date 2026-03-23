# StoreApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**storeControllerGetBySlug**](StoreApi.md#storecontrollergetbyslug) | **GET** /api/store/{slug} |  |
| [**storeControllerUpdateStore**](StoreApi.md#storecontrollerupdatestore) | **PATCH** /api/store |  |



## storeControllerGetBySlug

> storeControllerGetBySlug(slug)



### Example

```ts
import {
  Configuration,
  StoreApi,
} from '@shopbox/shopbox-sdk';
import type { StoreControllerGetBySlugRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const api = new StoreApi();

  const body = {
    // string
    slug: slug_example,
  } satisfies StoreControllerGetBySlugRequest;

  try {
    const data = await api.storeControllerGetBySlug(body);
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
| **slug** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## storeControllerUpdateStore

> storeControllerUpdateStore(updateStoreDto)



### Example

```ts
import {
  Configuration,
  StoreApi,
} from '@shopbox/shopbox-sdk';
import type { StoreControllerUpdateStoreRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreApi(config);

  const body = {
    // UpdateStoreDto
    updateStoreDto: ...,
  } satisfies StoreControllerUpdateStoreRequest;

  try {
    const data = await api.storeControllerUpdateStore(body);
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
| **updateStoreDto** | [UpdateStoreDto](UpdateStoreDto.md) |  | |

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
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

