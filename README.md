# Starter Template

`solutions-nx-ms-node-docker-basic-template`

## Nx Microservices with Node and Docker

We’ll be creating a simple product that will have two applications (a view application, and an API application).
And we will have a Docker container running on http://localhost:8080 that will have two services communicating with each other within the container.

### Services

#### _API Application_

`api`

- NestJs
- Express
- Handlebars

#### _VIEW Application_

`html`

- Handlebars

## Usage

Build:

```yaml
# Build api image
npm run deploy:api

# Build html image
npm run deploy:html

# Build Docker container
npm run deploy
```

Run in browser:

```yaml
http://localhost:8080/
```

### Source

[Nx and Node Microservices](https://blog.nrwl.io/nx-and-node-microservices-b6df3cd1bad6)

---

This project was generated using [Nx](https://nx.dev).
