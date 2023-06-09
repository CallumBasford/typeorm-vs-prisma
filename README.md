# TypeORM vs Prisma

A quick repository to demo the problem with Prisma when handling dates vs what TypeORM is capable of.

This repository shares one database and the schemas for Prisma and TypeORM are the same.

## To Run

- Install dependencies with `yarn`
- Start the local database with `yarn db:start`
- Run the migration of the local database, I used Prisma for this myself - `npx prisma migrate dev`

## TypeORM

In TypeORM we can specify `transformer` properties on our columns which transform values from the database immediately after querying

## Prisma

We can't run the same transformations in Prisma, this would mean anywhere that we run a query such as `.find()` we have to manually transform the dates. We could wrap our queries in helper functions that run the qeury and apply transformations but this still means if someone used the raw query by mistake then they would be passing native js `Date`s around
