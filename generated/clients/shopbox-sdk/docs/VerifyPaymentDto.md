
# VerifyPaymentDto


## Properties

Name | Type
------------ | -------------
`paymentId` | string
`gatewayReference` | string

## Example

```typescript
import type { VerifyPaymentDto } from '@shopbox/shopbox-sdk'

// TODO: Update the object below with actual values
const example = {
  "paymentId": null,
  "gatewayReference": null,
} satisfies VerifyPaymentDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VerifyPaymentDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


