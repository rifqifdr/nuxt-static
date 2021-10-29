# Button

## Component

### `<app-button>`

## API

### Button as an Internal Link

|     Prop     |   Type   |   Default   | Description                                                       |
| :----------: | :------: | :---------: | ----------------------------------------------------------------- |
|     `to`     | `String` |   `null`    | Default navigation between pages.                                 |
|    `role`    | `String` |  `button`   | Identifies an element as a button to screen readers.              |
| `aria-label` | `String` | `AppButton` | Provides an invisible label where a visible label cannot be used. |

### Button as an External Link

|     Prop     |   Type   |        Default        | Description                                                                      |
| :----------: | :------: | :-------------------: | -------------------------------------------------------------------------------- |
|    `href`    | `String` |        `null`         | Specifies the URL of the page the link goes to.                                  |
|    `role`    | `String` |       `button`        | Identifies an element as a button to screen readers.                             |
|    `rel`     | `String` | `noopener noreferrer` | Specifies the relationship between the current document and the linked document. |
|   `target`   | `String` |       `_blank`        | Specifies where to open the linked document.                                     |
| `aria-label` | `String` |      `AppButton`      | Provides an invisible label where a visible label cannot be used.                |

### Standard Button

|  Prop  |   Type   |   Default   | Description                      |
| :----: | :------: | :---------: | -------------------------------- |
| `type` | `String` |  `button`   | Specifies the type of button.    |
| `name` | `String` | `AppButton` | Specifies a name for the button. |

## Examples:

### Button as an Internal Link

```html
<app-button to="about">ABOUT PAGE</app-button>
```

### Button as an External Link

```html
<app-button href="https://nuxtjs.org/">NUXTJS</app-button>
```

### Standard Button

```html
<app-button>BUTTON</app-button>
```

---

[← Custom Components](../README.md)
