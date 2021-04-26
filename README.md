# Starter Template

`solutions-nx-ms-node-docker-basic-template`

## Nx Microservices with Node and Docker

We’ll be creating a simple product that will have two applications (a view application, and an API application).
And we will have a Docker container running on http://localhost:8080 that will have two services communicating with each other within the container.

### Services

#### 'API' Application

`api`

- NestJs
- Express
- Handlebars

#### 'VIEW' Application

`html`

- Handlebars

## Production build

1. Build apps:

   ```yaml
   # Build app 'api'
   nx build api

   # Build app 'html'
   nx build html

   # or:
   npm run build:all
   ```

2. Run containerization:

   ```yaml
   # Create Docker image: 'api'
   npm run deploy:api

   # Create Docker image: 'html'
   npm run deploy:html

   # Build Docker container
   npm run deploy
   ```

3. Test:

   ```yaml
   # Run in browser
   http://localhost:8080/
   ```

### Source

[Nx and Node Microservices](https://blog.nrwl.io/nx-and-node-microservices-b6df3cd1bad6)

---

This project was generated using [Nx](https://nx.dev).
