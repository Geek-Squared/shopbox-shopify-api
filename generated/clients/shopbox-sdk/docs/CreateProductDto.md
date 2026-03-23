
# CreateProductDto


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`price` | number
`currency` | string

## Example

```typescript
import type { CreateProductDto } from '@shopbox/shopbox-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "price": null,
  "currency": null,
} satisfies CreateProductDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateProductDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


