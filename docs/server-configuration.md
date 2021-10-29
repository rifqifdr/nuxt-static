# Server Configuration

The settings are categorized into a `development` and `production` environment.

This way you can create your preferred setup for each environment separately and avoid possible issues with the cache, stuck local dev server and so on.

## Development

Commands → `npm run dev` or `yarn dev`

The development environment is accessible by default at `http://localhost:3003`

Example:

```js
// config/development.js

{
  server: {
    hostname: process.env.DEV_HOST || '0.0.0.0',
    port: '5050'
  }
}
```

## Production

Commands → `npm run start` or `yarn start`

The production environment is accessible by default at `http://localhost:8008`

```js
// config/production.js

{
  server: {
    hostname: process.env.PROD_HOST || '0.0.0.0',
    port: '9090'
  }
}
```

---

[← Table of Contents](README.md)
