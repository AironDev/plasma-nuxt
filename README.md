# plasma-nuxt

> [AdonisJS](http://adonisjs.com/) + [Nuxt.js](https://nuxtjs.org) = :fire:

## Included

SPA Mode active - SSR disabled
- Add complete Login, Logout, Signup, confirm Mail and activate account
- Add Axios Nuxt Module with JWT configuration
- Add default Template with sticky header and sidebar with flexible content
- iView - A high quality UI Toolkit based on Vue.js
- resources/plugins/axios.js - Add Interceptor for JWT refresh tokens and re-request on expired JWT token
- start/hooks.js - Add a custom validator for signup | Add a custom exception handler for expired JWT token to signal for the axios interceptor


## Installation

Install [Node.js](https://nodejs.org/) and [PostgreSQL](https://www.postgresql.org/) and [Yarn](https://yarnpkg.com/en/)

If you don't have Adonis CLI installed on your machine:
```bash
yarn global add @adonisjs/cli
```

### In project Folder:
```bash
cp .env.example .env
yarn install
adonis key:generate
```
- Edit .env
- Database migration and fill with data
```bash
adonis migration:run
adonis seed
```
- Run `yarn dev` to run the application
```bash
yarn dev
```

### Screenshots:
<p align="center"><img src="https://i.imgur.com/RottSLC.png" /></p>

## Usage
| yarn | Description |
|------|-------------|
| yarn dev | Start AdonisJS server in development with Nuxt.js in dev mode (hot reloading). Listen on [http://localhost:3000](http://localhost:3000). |
| yarn build | Build your nuxt.js web application for production. |
| yarn start | Start AdonisJS server in production. |
| yarn lint | Lint your code with [ESLint](http://eslint.org) and [Standard](http://standardjs.com). |

## Features

See [AdonisJS features](http://adonisjs.com/docs/4.0/installation) and [Nuxt.js features](https://nuxtjs.org/guide/#features).

## Documentation

- [AdonisJS](http://adonisjs.com/docs/)
- [Nuxt.js](https://nuxtjs.org/guide/)
- [Vue.js](http://vuejs.org/guide/)
- [iView.js](https://www.iviewui.com/docs/guide/install-en/)

## Licenses

- [AdonisJS license](https://github.com/adonisjs/adonis-framework/blob/develop/LICENSE.txt)
- [NuxtJS license](https://github.com/nuxt/nuxt.js/blob/master/LICENSE.md)
- [VueJS license](https://github.com/vuejs/vue/blob/master/LICENSE)
- [iView license](https://github.com/iview/iview/blob/2.0/LICENSE)
