# PricePoint

[![Build Status](https://travis-ci.org/ChoreographingQuokka/PricePoint.svg?branch=master)](https://travis-ci.org/ChoreographingQuokka/PricePoint)

A price comparison application in which users can submit an item of interest to track across various online vendors and can show basic historical price fluctuations since the item has initially been queried. Users can signup and login to see their saved list of items that they have searched to track.

## Team

- Ryan Breeden
- Ian Mobley
- Kiyeon Park
- Jason Stieber

## Roadmap

View the project roadmap [here](LINK_TO_DOC)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)

## Usage

> Some usage instructions

## Requirements

- Node 6.9.x
- Redis 3.2.x
- Postgresql 9.6.x
- etc

## Development

### Installing System Dependencies

```bash
brew install yarn
brew install redis
brew install postgresql
```

Yarn is a replacement for npm. It's faster and *guarantees* consistency -- as you deploy your code in various environments, you won't run the risk of slight variations in what gets installed.

### Install Project Dependencies

```bash
yarn global add grunt-cli knex eslint
```

## App Configuration

Override settings `config/default.json` in any environment by making a copy of `config/ENV.example.json` and naming it `config/ENV.json` and setting the appropriate variable.

For environments that require use of environment variables, you can supply variables as defined in `config/custom-environment-variables.json`.

See [config package](https://www.npmjs.com/package/config)
And [custom environment variables](https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables)

## Database Initialization

IMPORTANT: ensure `postgres` is running before performing these steps.

### Database Creation

Use grunt to create a new database for your development and test environments:

Development envronment: `grunt pgcreatedb:default`

Other environments, specify like so: `NODE_ENV=test grunt pgcreatedb:default`

### Run Migrations & Data Seeds

In terminal, from the root directory:

To migrate to the latest version, run:

`knex migrate:latest --env NODE_ENV`

To rollback a version, run:

`knex migrate:rollback --env NODE_ENV`

To populate the database with seed data, run:

`knex seed:run --env NODE_ENV`

Note: `--env NODE_ENV` may be omitted for development. For example, `knex migrate:latest` will run all migrations in the development environment, while `knex migrate:latest --env test` will migrate in the test environment.

## Running the App

To run webpack build: `yarn run build`

To run server: `yarn run start`

To run tests: `yarn run test`

To run your redis server for the session store `redis-server`
