## Project Info

- This is the backend for nextjs-todo-ui (not yet started)

## Environment Setup

- Follow `env.example`

## Database Setup

Running:

- Install docker and PgAdmin 4
- Run `docker-compose up -d`
- Default container name is `nestjs-todo-api-postgres-1`

Shutdown:

- `docker-compose down`

## Connect to database via PgAdmin 4

- Open PgAdmin 4
- Connect to the server by Register -> Server
  - Use any name you like
  - Use "postgres" for username and password
  - Use "localhost" for Host name/address
- Create database name "todo-management"
- Database should be there.

## Postman Testing

- Import the Collection that is below this README.md file

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

## Postman Collection

```json
{
  "info": {
    "_postman_id": "291ecbec-24a2-43af-8af8-1e858c2bd356",
    "name": "Todos",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_exporter_id": "3297747"
  },
  "item": [
    {
      "name": "Get All Todos With Filters",
      "request": {
        "auth": {
          "type": "bearer",
          "bearer": [
            {
              "key": "token",
              "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbmRvbXRlc3QxQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjQtMTAtMDJUMDg6NDg6MjEuMDgxWiIsIm1vZGlmaWVkQXQiOiIyMDI0LTEwLTAyVDA4OjQ4OjIxLjA4MVoiLCJpYXQiOjE3Mjc4NjU5NDUsImV4cCI6MTcyNzg2OTU0NX0.s5jAp3mBRdWyHWnwIYFWksYuTzbCp6rNS3zeMbOad2I",
              "type": "string"
            }
          ]
        },
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/todos?status=OPEN&search=user",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["todos"],
          "query": [
            {
              "key": "status",
              "value": "OPEN"
            },
            {
              "key": "search",
              "value": "user"
            }
          ]
        }
      },
      "response": []
    },
    {
      "name": "Get All Todos Without Filters",
      "request": {
        "auth": {
          "type": "bearer",
          "bearer": [
            {
              "key": "token",
              "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbmRvbXRlc3QxQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjQtMTAtMDJUMDg6NDg6MjEuMDgxWiIsIm1vZGlmaWVkQXQiOiIyMDI0LTEwLTAyVDA4OjQ4OjIxLjA4MVoiLCJpYXQiOjE3Mjc4NjU5NDUsImV4cCI6MTcyNzg2OTU0NX0.s5jAp3mBRdWyHWnwIYFWksYuTzbCp6rNS3zeMbOad2I",
              "type": "string"
            }
          ]
        },
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/todos",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["todos"]
        }
      },
      "response": []
    },
    {
      "name": "Create Todo",
      "request": {
        "auth": {
          "type": "bearer",
          "bearer": [
            {
              "key": "token",
              "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbmRvbXRlc3QyQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjQtMTAtMDJUMDg6NDg6NTQuNjMxWiIsIm1vZGlmaWVkQXQiOiIyMDI0LTEwLTAyVDA4OjQ4OjU0LjYzMVoiLCJpYXQiOjE3Mjc4NTg5MzgsImV4cCI6MTcyNzg2MjUzOH0.fFB3uSO_Rh6R8V_I_4Bglfst6C4lDmoW9kP_iLoOFAw",
              "type": "string"
            }
          ]
        },
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"title\": \"this is for user2 ---- 1\",\n    \"description\": \"this is for user2 ---- 1\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:3000/todos",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["todos"]
        }
      },
      "response": []
    },
    {
      "name": "Get Todo By Id",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/todos/3721d3ba-8f6d-401c-ac71-78a030aafa67",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["todos", "3721d3ba-8f6d-401c-ac71-78a030aafa67"]
        }
      },
      "response": []
    },
    {
      "name": "Delete Todo By Id",
      "request": {
        "auth": {
          "type": "bearer",
          "bearer": [
            {
              "key": "token",
              "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbmRvbXRlc3QyQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjQtMTAtMDJUMDg6NDg6NTQuNjMxWiIsIm1vZGlmaWVkQXQiOiIyMDI0LTEwLTAyVDA4OjQ4OjU0LjYzMVoiLCJpYXQiOjE3Mjc4NjY1NjksImV4cCI6MTcyNzg3MDE2OX0.t4SdcO30dxs_arzVPyHdOjsTl_r-NCF1BPQwTIXrvFw",
              "type": "string"
            }
          ]
        },
        "method": "DELETE",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/todos/c7323aab-f3bb-4118-a433-793f844129e4",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["todos", "c7323aab-f3bb-4118-a433-793f844129e4"]
        }
      },
      "response": []
    },
    {
      "name": "Update Todo Status By Id",
      "request": {
        "auth": {
          "type": "bearer",
          "bearer": [
            {
              "key": "token",
              "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbmRvbXRlc3QyQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjQtMTAtMDJUMDg6NDg6NTQuNjMxWiIsIm1vZGlmaWVkQXQiOiIyMDI0LTEwLTAyVDA4OjQ4OjU0LjYzMVoiLCJpYXQiOjE3Mjc4NjY1NjksImV4cCI6MTcyNzg3MDE2OX0.t4SdcO30dxs_arzVPyHdOjsTl_r-NCF1BPQwTIXrvFw",
              "type": "string"
            }
          ]
        },
        "method": "PATCH",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"status\": \"DONE\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:3000/todos/c7323aab-f3bb-4118-a433-793f844129e4/status",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["todos", "c7323aab-f3bb-4118-a433-793f844129e4", "status"]
        }
      },
      "response": []
    },
    {
      "name": "Signup",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"email\": \"randomtest1@gmail.com\",\n    \"password\": \"somethingStrongPassword1!\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:3000/auth/signup",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["auth", "signup"]
        }
      },
      "response": []
    },
    {
      "name": "Signin",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"email\": \"randomtest1@gmail.com\",\n    \"password\": \"somethingStrongPassword1!\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:3000/auth/signin",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["auth", "signin"]
        }
      },
      "response": []
    }
  ]
}
```
