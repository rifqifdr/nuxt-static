# Image

## Component

### `<app-img>`

## API

|      Prop      |   Type    | Required |                      Default                       | Description                                              |
| :------------: | :-------: | :------: | :------------------------------------------------: | -------------------------------------------------------- |
|     `url`      | `String`  |  `true`  |                         -                          | Specifies the path to the image.                         |
| `aspect-ratio` | `String`  |  `true`  |                         -                          | Gives the image a fixed aspect ratio.                    |
|     `lazy`     | `Boolean` |    -     |                       `true`                       | Enables lazy-loading.                                    |
| `class-figure` | `String`  |    -     |          `relative block overflow-hidden`          | Specifies one or more classnames for the figure element. |
|  `class-img`   | `String`  |    -     | `absolute top-0 left-0 w-full h-full object-cover` | Specifies one or more classnames for the image element.  |
|     `alt`      | `String`  |    -     |                     `AppImage`                     | Specifies an alternate text for an image.                |
|  `draggable`   | `String`  |    -     |                      `false`                       | Specifies whether an element is draggable or not.        |

## Examples:

```html
<app-img aspect-ratio="1:1" url="/link/to/image.jpg" />
```

```html
<app-img
  :lazy="false"
  aspect-ratio="16:9"
  url="~/assets/link/to/image.jpg"
  draggable="true"
/>
```

---

[← Custom Components](../README.md)
