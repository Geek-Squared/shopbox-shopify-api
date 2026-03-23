
# WhatsappWebhookDto


## Properties

Name | Type
------------ | -------------
`from` | string
`message` | string
`payload` | object

## Example

```typescript
import type { WhatsappWebhookDto } from '@shopbox/shopbox-sdk'

// TODO: Update the object below with actual values
const example = {
  "from": null,
  "message": null,
  "payload": null,
} satisfies WhatsappWebhookDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WhatsappWebhookDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


