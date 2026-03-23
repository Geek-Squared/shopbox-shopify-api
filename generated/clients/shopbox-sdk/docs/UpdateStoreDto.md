
# UpdateStoreDto


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`logoUrl` | string
`city` | string
`category` | string

## Example

```typescript
import type { UpdateStoreDto } from '@shopbox/shopbox-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "logoUrl": null,
  "city": null,
  "category": null,
} satisfies UpdateStoreDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateStoreDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


