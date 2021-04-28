# PharmadbSpa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

In order to run the application you must first verify or install the below requirements

- Internet connection for access to the PharmaDB API
- [NodeJS Runtime](https://nodejs.org/en/download/)
- [NPM package manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

You must also pull the repository and install the projects npm dependencies which can be done with the following three commands...

```git clone https://github.com/pharmaDB/capstone_spa```

```cd capstone_spa```

```npm install```

After successfully running these commands, the application can be run locally or built for deployment by following the below sections.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Docker

Run `ng build --prod` for a prod build
Run `Docker build -t av-app-image .` to create a docker image
Run `docker run --name av-app-container -d -p 8080:80 av-app-image` to start the container
