# Starwars Planets

## Introduction

This mini project is built using Vue ecosystem libraries like Vue (2.6), VueX, Vue Router. This web application basically lists all of the Starwars planets which are fetched by calling external paginated [Starwars API](https://swapi.dev/api/planets). This application is having below features

- Listing of the StarWars pplanets in tabular format with basic metadata fields as columns.
- Server side pagination with 10 records per page.
- Server side sorting of all the columns in both ascending and descending order.

## Project setup
```
npm install
```
## Environmental configuration

In order to interact with the external API from the star wars web application, please create .env file at the root location and add below environmental property which will act as a base URL for all of the Star wars endpoints/resources.
```
VUE_APP_BASE_URL = "https://swapi.dev/api/"
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
