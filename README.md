###  Ny Sequelize Auto
This module automatically generates model definitions for [RobinBuschmann/sequelize-typescript](https://github.com/RobinBuschmann/sequelize-typescript) and [TypeGraphql](https://typegraphql.com/)

### Support
 - Postgres
 - Mysql
 - Mssql
 - Sqlite

### Get Started

It also automatically adds @Field () to https://typegraphql.com/

Download the project:

    git clone https://github.com/leonetosoft/ny-sequelize-auto.git

Install [Ferreiro](https://github.com/leonetosoft/ferreiro):

    npm install -g ferreiro

Configure .env file

```
dialect = postgres
database = user
host = 127.0.0.1
pass = ****
port = 5432
schema = public
user = postgres
```
Generate your codes:

    ferreiro --env .env.pg --template templates/ --outDir build
Code generated in build directory.

### Easy change
You can modify the generation algorithm and generate even more things for your project. The imagination is the limit.
For that, see the cdocumentation.

### References

 - [Ferreiro](https://github.com/leonetosoft/ferreiro) 
 - [TypeGraphql](https://typegraphql.com/)
 - [RobinBuschmann/sequelize-typescript](https://github.com/RobinBuschmann/sequelize-typescript)
