
# PaymentWebhookDto


## Properties

Name | Type
------------ | -------------
`paymentId` | string
`gatewayReference` | string
`payload` | object

## Example

```typescript
import type { PaymentWebhookDto } from '@shopbox/shopbox-sdk'

// TODO: Update the object below with actual values
const example = {
  "paymentId": null,
  "gatewayReference": null,
  "payload": null,
} satisfies PaymentWebhookDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaymentWebhookDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


