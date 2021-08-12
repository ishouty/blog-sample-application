

# Blog Application

## Overview

The blog application consists of two apps, API express JS and Frontend Next JS to ulitlize the static generation renderer from Next Js.

### Front End 
All of the files are built on build time in comparision to server side which happens on run time for the features required for the task.

SSG:  Automatically generated as static HTML + JSON (uses getStaticProps)

### Advantages 

This means more performance on not needed the ssr to render page, caching and SEO and to captilize of Next Js framework of prefetching files and content.

### Draw Backs 
The draw backs are that there is a build depencendy on the application where the front end service cannot deploy on certain pages unless it can request data from the Api to generate the HTML + JSON files.

There is probably a solution of depenency management when deploying through nx

## Frameworks and Tools 

- [NX Workspace](https://nx.dev) for Mono Repo Management 

  * Generate and build skeletons of applications and frameworks required e.g Nextjs, express  
  * Build and deploy commands 
  * Configuration setup for apps 
  * Building shared libaries which can be used for both applications
  * Linting & Tests will be automatically run as part of the build process but can also be run independently.

### Api Service 

- [Node](https://www.typescriptlang.org/) - Javascript server side 
- [ExpressJs](https://expressjs.com/) - Api 
framework 

#### Languages
- [Typescript](https://www.typescriptlang.org/) 
- [Javascript](https://www.javascript.com/) 

### Mock Data 

[Mockaroo](https://www.mockaroo.com) - Mock generator and schema creation 

### Tests

[Jest](https://jestjs.io/) - Unit tests
[Jest](https://www.mockaroo.com) - Integration tests

### Front End

- [React](https://reactjs.org/) - Ui components
- [NextJS](https://nextjs.org/) - for Static Server Side Generation framework for SSR and static generation

- [Styled-components](https://styled-components.com/docs/api) - creating components with styles 

### Note: Naming Conventions on React Components 
- All of the React components are camel case, this is something developers can agree on the conventions etc.. 


#### Language 
- [Typescript](https://www.typescriptlang.org/) 
- [Javascript](https://www.javascript.com/) 

### Tests

[Jest](https://jestjs.io/) - Unit tests , helpers etc..

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Testings pages and components 

[Cypress](https://docs.cypress.io/guides/overview/why-cypress) - Testing pages and flows of application

### Build and Deploy

[Docker](https://docs.docker.com/) - docker containers

## Running Applications in Development 

```
npm run start api-service
npm run start blog
```
## Running Unit Tests

Note: Running integration tests for api service would need the service to be running

```
npm run test api-service
npm run test blog
```

## Running Cypress E2E Tests

Note: running this locally you need api-service as static files are built on build time.

```
npm run e2e
```

```
npm run test api-service
npm run test blog
```

## Running Linting

Note: Running integration tests for api service would need the service to be running

```
npm run lint
```

## How to Run Application in Docker Container  

Building containers will also leverage of making sure tests and linting issues are passed before deployment. 

Note: Will only run lint and unit tests
## Required Before Running Commands 

* Docker 
* Node 
* Npm

```
npm install
```

```
npm run start api-service
npm run deploy-docker-images
```

Deploy / Run:

All Applications
```
docker-compose up
```
Application
```
docker-compose up api
docker-compose up blog
```

visit http://localhost:3000
