# OrdersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**ordersControllerCreate**](OrdersApi.md#orderscontrollercreate) | **POST** /api/orders |  |
| [**ordersControllerFindAll**](OrdersApi.md#orderscontrollerfindall) | **GET** /api/orders |  |
| [**ordersControllerFindOne**](OrdersApi.md#orderscontrollerfindone) | **GET** /api/orders/{id} |  |
| [**ordersControllerUpdate**](OrdersApi.md#orderscontrollerupdate) | **PUT** /api/orders/{id} |  |



## ordersControllerCreate

> ordersControllerCreate(createOrderDto)



### Example

```ts
import {
  Configuration,
  OrdersApi,
} from '@shopbox/shopbox-sdk';
import type { OrdersControllerCreateRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const api = new OrdersApi();

  const body = {
    // CreateOrderDto
    createOrderDto: ...,
  } satisfies OrdersControllerCreateRequest;

  try {
    const data = await api.ordersControllerCreate(body);
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
| **createOrderDto** | [CreateOrderDto](CreateOrderDto.md) |  | |

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


## ordersControllerFindAll

> ordersControllerFindAll()



### Example

```ts
import {
  Configuration,
  OrdersApi,
} from '@shopbox/shopbox-sdk';
import type { OrdersControllerFindAllRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrdersApi(config);

  try {
    const data = await api.ordersControllerFindAll();
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


## ordersControllerFindOne

> ordersControllerFindOne(id)



### Example

```ts
import {
  Configuration,
  OrdersApi,
} from '@shopbox/shopbox-sdk';
import type { OrdersControllerFindOneRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrdersApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies OrdersControllerFindOneRequest;

  try {
    const data = await api.ordersControllerFindOne(body);
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


## ordersControllerUpdate

> ordersControllerUpdate(id, updateOrderDto)



### Example

```ts
import {
  Configuration,
  OrdersApi,
} from '@shopbox/shopbox-sdk';
import type { OrdersControllerUpdateRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrdersApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateOrderDto
    updateOrderDto: ...,
  } satisfies OrdersControllerUpdateRequest;

  try {
    const data = await api.ordersControllerUpdate(body);
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
| **updateOrderDto** | [UpdateOrderDto](UpdateOrderDto.md) |  | |

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

