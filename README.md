## Chatbots.Studio test

### Installation
```sh
$ git clone https://github.com/nikolas-kokhno/chatbots.studio
$ npm install
$ Add .env file to the config folder --> (src/config/.env)
$ npm run start
```

### Routes
```sh
GET - baseURL/api/products
GET - baseURL/api/products/:id
POST - baseURL/api/products
PUT - baseURL/api/products/:id
DELETE - baseURL/api/products/:id
```

```sh
GET - baseURL/api/category
GET - baseURL/api/category/:id
POST - baseURL/api/category
PUT - baseURL/api/category/:id
DELETE - baseURL/api/category/:id
```

```sh
GET - baseURL/api/postmaster
GET - baseURL/api/postmaster/:id
POST - baseURL/api/postmaster
PUT - baseURL/api/postmaster/:id
DELETE - baseURL/api/postmaster/:id
```

### DATABASE_TABLES

Product model
| NAME | TYPE |
| ------ | ------ |
| name | String |
| price | Number |
| category | String |
| postmaster | String |
| shelfLife | Number |
| quantity | Number |

Category model
| NAME | TYPE |
| ------ | ------ |
| name | String |

Post-master model
| NAME | TYPE |
| ------ | ------ |
| name | String |
| owner | String |

