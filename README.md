# Ode to the Pythagoreans

All is number! Ode to the Pythagoreans is an interactive demonstration of the Pythagorean theorem built with [React](https://reactjs.org/) and [Flask](https://flask.palletsprojects.com/en/2.0.x/). Additional technologies include [Bootstrap](https://react-bootstrap.github.io/) and [react-spring](https://react-spring.io/).

This repository contains both front and back ends. The full stack application may be run with Docker Compose as an orchestration of three containers. These are:

1. The back end built with Flask.
2. The front end built with React.
3. An Nginx reverse proxy to join the two.

## Development

During development, build and start the containers with:

```
> docker-compose -f docker-compose.dev.yml build --no-cache
> docker-compose -f docker-compose.dev.yml up
```

Both front and back end run on development servers with React and Flask (debug flag on), respectively. Hot loading works as the containers are configured to bind to the local `front-end` and `back-end` folders.

The project follows an AirBnB style for front-end JavaScript code. ESLint throws linting issues as errors on build. For peace of mind during development, use an `.env.development.local` file with:

```
ESLINT_NO_DEV_ERRORS=true
```

## Production

For production, build and run with: 

```
> docker-compose -f docker-compose.yml build --no-cache
> docker-compose -f docker-compose.yml up
```

The production-grade back end runs on a [Twisted Web](https://twistedmatrix.com/trac/wiki/TwistedWeb) server. The front end, in turn, is served through its own independent Nginx server. As with development, back end and front are joined by an additional Nginx reverse proxy.

**Note that** the `nginx.conf` and `docker-compose.yml` are tracked by Git. These files (and their development counterparts) may contain sensitive variables, such as server addresses. Thus, they have been configured to be assumed unchanged by Git. (The Dockerfiles have not been configured.) Be careful about exposing information if you plan on deploying the application rather than just running it locally.

## License

This project is licensed under an MIT license.