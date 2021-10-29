# Responsive Picture

## Component

### `<app-picture>`

## API

|      Prop       |   Type    | Required |                      Default                       | Description                                               |
| :-------------: | :-------: | :------: | :------------------------------------------------: | --------------------------------------------------------- |
|      `url`      | `String`  |  `true`  |                         -                          | Specifies the path to the fallback image.                 |
|    `url-sm`     | `String`  |    -     |                       `null`                       | Specifies the path to the `sm` image.                     |
|    `url-md`     | `String`  |    -     |                       `null`                       | Specifies the path to the `md` image.                     |
|    `url-lg`     | `String`  |    -     |                       `null`                       | Specifies the path to the `lg` image.                     |
|    `url-xl`     | `String`  |    -     |                       `null`                       | Specifies the path to the `xl` image.                     |
|    `url-xxl`    | `String`  |    -     |                       `null`                       | Specifies the path to the `xxl` image.                    |
| `aspect-ratio`  | `String`  |  `true`  |                         -                          | Gives the image a fixed aspect ratio.                     |
|     `lazy`      | `Boolean` |    -     |                       `true`                       | Enables lazy-loading.                                     |
| `class-figure`  | `String`  |    -     |          `relative block overflow-hidden`          | Specifies one or more classnames for the figure element.  |
| `class-picture` | `String`  |    -     |                  `relative block`                  | Specifies one or more classnames for the picture element. |
|   `class-img`   | `String`  |    -     | `absolute top-0 left-0 w-full h-full object-cover` | Specifies one or more classnames for the image element.   |
|      `alt`      | `String`  |    -     |                    `AppPicture`                    | Specifies an alternate text for an image.                 |
|   `draggable`   | `String`  |    -     |                      `false`                       | Specifies whether an element is draggable or not.         |
|   `media-sm`    | `String`  |    -     |                `(min-width: 640px)`                | Specifies the media query for the `sm` resource.          |
|   `media-md`    | `String`  |    -     |                `(min-width: 768px)`                | Specifies the media query for the `md` resource.          |
|   `media-lg`    | `String`  |    -     |               `(min-width: 1024px)`                | Specifies the media query for the `lg` resource.          |
|   `media-xl`    | `String`  |    -     |               `(min-width: 1280px)`                | Specifies the media query for the `xl` resource.          |
|   `media-xxl`   | `String`  |    -     |               `(min-width: 1536px)`                | Specifies the media query for the `xxl` resource.         |
|     `type`      | `String`  |    -     |                    `image/jpeg`                    | Specifies the MIME-type of the all-sized resources.       |
|    `type-sm`    | `String`  |    -     |                       `null`                       | Specifies the MIME-type of the `sm` resource.             |
|    `type-md`    | `String`  |    -     |                       `null`                       | Specifies the MIME-type of the `md` resource.             |
|    `type-lg`    | `String`  |    -     |                       `null`                       | Specifies the MIME-type of the `lg` resource.             |
|    `type-xl`    | `String`  |    -     |                       `null`                       | Specifies the MIME-type of the `xl` resource.             |
|   `type-xxl`    | `String`  |    -     |                       `null`                       | Specifies the MIME-type of the `xxl` resource.            |

## Examples:

```html
<app-picture
  :lazy="false"
  aspect-ratio="1:1"
  url-xxl="/link/to/image-1536.jpg"
  url-xl="/link/to/image-1280.jpg"
  url-lg="/link/to/image-1024.jpg"
  url-md="/link/to/image-768.jpg"
  url-sm="/link/to/image-640.jpg"
  url="/link/to/image.jpg"
/>
```

```html
<app-picture
  aspect-ratio="16:9"
  url-xxl="~/assets/link/to/image-1500.png"
  url-lg="~/assets/link/to/image-1000.gif"
  url="~/assets/link/to/image.jpg"
  media-xxl="(min-width: 1500px)"
  media-lg="(min-width: 1000px)"
  type-xxl="image/png"
  type-lg="image/gif"
  alt="Responsive image"
/>
```

---

[← Custom Components](../README.md)
