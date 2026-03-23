# @shopbox/shopbox-sdk@0.0.2

A TypeScript SDK client for the localhost API.

## Usage

First, install the SDK from npm.

```bash
npm install @shopbox/shopbox-sdk --save
```

Next, try it out.


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


## Documentation

### API Endpoints

All URIs are relative to *http://localhost*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AuthApi* | [**authControllerLogin**](docs/AuthApi.md#authcontrollerlogin) | **POST** /api/auth/login | 
*AuthApi* | [**authControllerLogout**](docs/AuthApi.md#authcontrollerlogout) | **POST** /api/auth/logout | 
*AuthApi* | [**authControllerOtp**](docs/AuthApi.md#authcontrollerotp) | **POST** /api/auth/otp | 
*AuthApi* | [**authControllerRegister**](docs/AuthApi.md#authcontrollerregister) | **POST** /api/auth/register | 
*DefaultApi* | [**appControllerGetStatus**](docs/DefaultApi.md#appcontrollergetstatus) | **GET** /api | 
*OrdersApi* | [**ordersControllerCreate**](docs/OrdersApi.md#orderscontrollercreate) | **POST** /api/orders | 
*OrdersApi* | [**ordersControllerFindAll**](docs/OrdersApi.md#orderscontrollerfindall) | **GET** /api/orders | 
*OrdersApi* | [**ordersControllerFindOne**](docs/OrdersApi.md#orderscontrollerfindone) | **GET** /api/orders/{id} | 
*OrdersApi* | [**ordersControllerUpdate**](docs/OrdersApi.md#orderscontrollerupdate) | **PUT** /api/orders/{id} | 
*PaymentsApi* | [**paymentsControllerInitiate**](docs/PaymentsApi.md#paymentscontrollerinitiate) | **POST** /api/payments/initiate | 
*PaymentsApi* | [**paymentsControllerVerify**](docs/PaymentsApi.md#paymentscontrollerverify) | **POST** /api/payments/verify | 
*PaymentsApi* | [**paymentsControllerWebhook**](docs/PaymentsApi.md#paymentscontrollerwebhook) | **POST** /api/payments/webhook | 
*PluginsApi* | [**pluginsControllerDelivery**](docs/PluginsApi.md#pluginscontrollerdelivery) | **POST** /api/plugins/delivery | 
*PluginsApi* | [**pluginsControllerList**](docs/PluginsApi.md#pluginscontrollerlist) | **GET** /api/plugins | 
*PluginsApi* | [**pluginsControllerRiders**](docs/PluginsApi.md#pluginscontrollerriders) | **POST** /api/plugins/delivery/riders | 
*ProductsApi* | [**productsControllerCreate**](docs/ProductsApi.md#productscontrollercreate) | **POST** /api/products | 
*ProductsApi* | [**productsControllerFindAll**](docs/ProductsApi.md#productscontrollerfindall) | **GET** /api/products | 
*ProductsApi* | [**productsControllerFindOne**](docs/ProductsApi.md#productscontrollerfindone) | **GET** /api/products/{id} | 
*ProductsApi* | [**productsControllerRemove**](docs/ProductsApi.md#productscontrollerremove) | **DELETE** /api/products/{id} | 
*ProductsApi* | [**productsControllerUpdate**](docs/ProductsApi.md#productscontrollerupdate) | **PUT** /api/products/{id} | 
*SellersApi* | [**sellersControllerGetById**](docs/SellersApi.md#sellerscontrollergetbyid) | **GET** /api/sellers/{id} | 
*SellersApi* | [**sellersControllerGetProfile**](docs/SellersApi.md#sellerscontrollergetprofile) | **GET** /api/sellers | 
*SellersApi* | [**sellersControllerUpdateProfile**](docs/SellersApi.md#sellerscontrollerupdateprofile) | **PUT** /api/sellers | 
*StoreApi* | [**storeControllerGetBySlug**](docs/StoreApi.md#storecontrollergetbyslug) | **GET** /api/store/{slug} | 
*StoreApi* | [**storeControllerUpdateStore**](docs/StoreApi.md#storecontrollerupdatestore) | **PATCH** /api/store | 
*WhatsappApi* | [**whatsappControllerSend**](docs/WhatsappApi.md#whatsappcontrollersend) | **POST** /api/whatsapp/send | 
*WhatsappApi* | [**whatsappControllerWebhook**](docs/WhatsappApi.md#whatsappcontrollerwebhook) | **POST** /api/whatsapp/webhook | 


### Models

- [CreateOrderDto](docs/CreateOrderDto.md)
- [CreateOrderItemDto](docs/CreateOrderItemDto.md)
- [CreateProductDto](docs/CreateProductDto.md)
- [DeliveryDto](docs/DeliveryDto.md)
- [InitiatePaymentDto](docs/InitiatePaymentDto.md)
- [LoginDto](docs/LoginDto.md)
- [LogoutDto](docs/LogoutDto.md)
- [OtpDto](docs/OtpDto.md)
- [PaymentWebhookDto](docs/PaymentWebhookDto.md)
- [RegisterDto](docs/RegisterDto.md)
- [RidersDto](docs/RidersDto.md)
- [SendWhatsappDto](docs/SendWhatsappDto.md)
- [UpdateOrderDto](docs/UpdateOrderDto.md)
- [UpdateProductDto](docs/UpdateProductDto.md)
- [UpdateSellerDto](docs/UpdateSellerDto.md)
- [UpdateStoreDto](docs/UpdateStoreDto.md)
- [VerifyPaymentDto](docs/VerifyPaymentDto.md)
- [WhatsappWebhookDto](docs/WhatsappWebhookDto.md)

### Authorization


Authentication schemes defined for the API:
<a id="bearer"></a>
#### bearer


- **Type**: HTTP Bearer Token authentication (JWT)

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `0.0.2`
- Package version: `0.0.2`
- Generator version: `7.20.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
