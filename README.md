## Database Setup

Running:

- Install docker and PgAdmin 4
- Run `docker-compose up -d`
- Container name is "nest-js-task-management-api-postgres-1"

Shutdown:

- `docker-compose down`

## Connect to database via PgAdmin 4

- Open PgAdmin 4
- Connect to the server by Register -> Server
  - Use any name you like
  - Use "postgres" for username and password
  - Use "localhost" for Host name/address
- Database should be there.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
