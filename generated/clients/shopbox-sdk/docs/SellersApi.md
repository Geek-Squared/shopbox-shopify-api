# SellersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**sellersControllerGetById**](SellersApi.md#sellerscontrollergetbyid) | **GET** /api/sellers/{id} |  |
| [**sellersControllerGetProfile**](SellersApi.md#sellerscontrollergetprofile) | **GET** /api/sellers |  |
| [**sellersControllerUpdateProfile**](SellersApi.md#sellerscontrollerupdateprofile) | **PUT** /api/sellers |  |



## sellersControllerGetById

> sellersControllerGetById(id)



### Example

```ts
import {
  Configuration,
  SellersApi,
} from '@shopbox/shopbox-sdk';
import type { SellersControllerGetByIdRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SellersApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies SellersControllerGetByIdRequest;

  try {
    const data = await api.sellersControllerGetById(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

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


## sellersControllerGetProfile

> sellersControllerGetProfile()



### Example

```ts
import {
  Configuration,
  SellersApi,
} from '@shopbox/shopbox-sdk';
import type { SellersControllerGetProfileRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SellersApi(config);

  try {
    const data = await api.sellersControllerGetProfile();
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


## sellersControllerUpdateProfile

> sellersControllerUpdateProfile(updateSellerDto)



### Example

```ts
import {
  Configuration,
  SellersApi,
} from '@shopbox/shopbox-sdk';
import type { SellersControllerUpdateProfileRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SellersApi(config);

  const body = {
    // UpdateSellerDto
    updateSellerDto: ...,
  } satisfies SellersControllerUpdateProfileRequest;

  try {
    const data = await api.sellersControllerUpdateProfile(body);
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
| **updateSellerDto** | [UpdateSellerDto](UpdateSellerDto.md) |  | |

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

