# Link

## Component

### `<app-link>`

## API

### Link as an Internal Link

|     Prop     |   Type   |  Default  | Description                                                       |
| :----------: | :------: | :-------: | ----------------------------------------------------------------- |
|     `to`     | `String` |  `null`   | Default navigation between pages.                                 |
| `aria-label` | `String` | `AppLink` | Provides an invisible label where a visible label cannot be used. |

### Link as an External Link

|     Prop     |   Type   |        Default        | Description                                                                      |
| :----------: | :------: | :-------------------: | -------------------------------------------------------------------------------- |
|    `href`    | `String` |        `null`         | Specifies the URL of the page the link goes to.                                  |
|    `rel`     | `String` | `noopener noreferrer` | Specifies the relationship between the current document and the linked document. |
|   `target`   | `String` |       `_blank`        | Specifies where to open the linked document.                                     |
| `aria-label` | `String` |       `AppLink`       | Provides an invisible label where a visible label cannot be used.                |

## Examples:

### Link as an Internal Link

```html
<app-link to="contact">CONTACT PAGE</app-link>
```

### Link as an External Link

```html
<app-link href="https://nuxtjs.org/">NUXTJS</app-link>
```

---

[← Custom Components](../README.md)
