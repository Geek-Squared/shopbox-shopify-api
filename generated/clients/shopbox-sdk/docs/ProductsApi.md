# ProductsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**productsControllerCreate**](ProductsApi.md#productscontrollercreate) | **POST** /api/products |  |
| [**productsControllerFindAll**](ProductsApi.md#productscontrollerfindall) | **GET** /api/products |  |
| [**productsControllerFindOne**](ProductsApi.md#productscontrollerfindone) | **GET** /api/products/{id} |  |
| [**productsControllerRemove**](ProductsApi.md#productscontrollerremove) | **DELETE** /api/products/{id} |  |
| [**productsControllerUpdate**](ProductsApi.md#productscontrollerupdate) | **PUT** /api/products/{id} |  |



## productsControllerCreate

> productsControllerCreate(createProductDto)



### Example

```ts
import {
  Configuration,
  ProductsApi,
} from '@shopbox/shopbox-sdk';
import type { ProductsControllerCreateRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProductsApi(config);

  const body = {
    // CreateProductDto
    createProductDto: ...,
  } satisfies ProductsControllerCreateRequest;

  try {
    const data = await api.productsControllerCreate(body);
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
| **createProductDto** | [CreateProductDto](CreateProductDto.md) |  | |

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


## productsControllerFindAll

> productsControllerFindAll()



### Example

```ts
import {
  Configuration,
  ProductsApi,
} from '@shopbox/shopbox-sdk';
import type { ProductsControllerFindAllRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProductsApi(config);

  try {
    const data = await api.productsControllerFindAll();
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


## productsControllerFindOne

> productsControllerFindOne(id)



### Example

```ts
import {
  Configuration,
  ProductsApi,
} from '@shopbox/shopbox-sdk';
import type { ProductsControllerFindOneRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProductsApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies ProductsControllerFindOneRequest;

  try {
    const data = await api.productsControllerFindOne(body);
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


## productsControllerRemove

> productsControllerRemove(id)



### Example

```ts
import {
  Configuration,
  ProductsApi,
} from '@shopbox/shopbox-sdk';
import type { ProductsControllerRemoveRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProductsApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies ProductsControllerRemoveRequest;

  try {
    const data = await api.productsControllerRemove(body);
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


## productsControllerUpdate

> productsControllerUpdate(id, updateProductDto)



### Example

```ts
import {
  Configuration,
  ProductsApi,
} from '@shopbox/shopbox-sdk';
import type { ProductsControllerUpdateRequest } from '@shopbox/shopbox-sdk';

async function example() {
  console.log("🚀 Testing @shopbox/shopbox-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProductsApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateProductDto
    updateProductDto: ...,
  } satisfies ProductsControllerUpdateRequest;

  try {
    const data = await api.productsControllerUpdate(body);
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
| **updateProductDto** | [UpdateProductDto](UpdateProductDto.md) |  | |

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

