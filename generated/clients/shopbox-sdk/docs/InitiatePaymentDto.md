
# InitiatePaymentDto


## Properties

Name | Type
------------ | -------------
`orderId` | string
`provider` | string

## Example

```typescript
import type { InitiatePaymentDto } from '@shopbox/shopbox-sdk'

// TODO: Update the object below with actual values
const example = {
  "orderId": null,
  "provider": null,
} satisfies InitiatePaymentDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InitiatePaymentDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


