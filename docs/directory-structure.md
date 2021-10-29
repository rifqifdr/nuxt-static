# Directory Structure

Here is a brief introduction to the project structure.

```sh
.
├── .vscode/
├── assets/
│   ├── favicons/
│   ├── images/
│   │   └── social/
│   └── styles/
│       ├── base/
│       ├── settings/
│       └── utilities/
├── components/
│   ├── blocks/
│   ├── common/
│   ├── elements/
│   └── templates/
├── config/
├── docs/
├── layouts/
├── middleware/
├── mixins/
├── modules/
├── pages/
├── plugins/
├── public/
│   ├── fonts/
│   └── images/
├── store/
├── templates/
├── utils/
│
└── nuxt.config.js
```

## .vscode

The .vscode directory contains [Visual Studio Code](https://code.visualstudio.com/) settings that are stored inside your workspace. Workspace settings are specific to a project and can be shared across developers on a project. [More info](https://code.visualstudio.com/docs/getstarted/settings)

## assets

The assets directory contains your uncompiled assets such as your styles, images, or fonts. [More info](https://nuxtjs.org/docs/2.x/directory-structure/assets)

## components

The components directory is where you put all your Vue.js components which are then imported into your pages. [More info](https://nuxtjs.org/docs/2.x/directory-structure/components)

## config

The config directory is used to manage all project settings. Each category in a separate file.

## docs

Project documentation.

## layouts

Layouts are a great help when you want to change the look and feel of your Nuxt.js app. [More info](https://nuxtjs.org/docs/2.x/directory-structure/layouts)

## middleware

The middleware directory contains your application middleware. Middleware lets you define custom functions that can be run before rendering either a page or a group of pages (layout). [More info](https://nuxtjs.org/docs/2.x/directory-structure/middleware)

## mixins

Mixins are a flexible way to distribute reusable functionalities for Vue components. A mixin object can contain any component options. When a component uses a mixin, all options in the mixin will be “mixed” into the component’s own options. [More info](https://vuejs.org/v2/guide/mixins.html)

## modules

Modules are Nuxt.js extensions which can extend the framework's core functionality and add endless integrations. Once you have installed the modules you can then add them to your nuxt.config.js file under the modules property. [More info](https://nuxtjs.org/docs/2.x/directory-structure/modules)

## pages

The pages directory contains your application's views and routes. [More info](https://nuxtjs.org/docs/2.x/directory-structure/pages)

## plugins

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. [More info](https://nuxtjs.org/docs/2.x/directory-structure/plugins)

## public

The public directory is directly mapped to the server root and contains files that likely won't be changed. [More info](https://nuxtjs.org/docs/2.x/directory-structure/static)

## store

The store directory contains your Vuex Store files. The Vuex Store comes with Nuxt.js out of the box but is disabled by default. Creating an index.js file in this directory enables the store. [More info](https://nuxtjs.org/docs/2.x/directory-structure/store)

## templates

The templates directory contains your own templates which will be rendered based on Nuxt configuration.

## utils

The utils directory contains code snippets that can be used throughout the application.

## nuxt.config.js

The nuxt.config.js file is the single point of configuration for Nuxt.js. [More info](https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config)

---

[← Table of Contents](README.md)
