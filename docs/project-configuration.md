# Project Configuration

`config` helps you manage all project configurations.

### Configuration Files

- `default.js` - Contains all `default` parameters that can be overwritten by other files.
- `development.js` - Contains parameters specific to the `development` environment.
- `production.js` - Contains parameters specific to the `production` environment.

### Common Usage

Place this at the top of your file:

```js
import config from './config'
```

Or load a specific configuration:

```js
const config = require('./config/default').breakpoints
```

Use `config` in your code:

```js
import config from './config'

// ...

export const canonical = (_path = []) => {
  return [
    {
      rel: 'canonical',
      href: config.app.url + _path
    }
  ]
}
```

---

[← Table of Contents](README.md)
