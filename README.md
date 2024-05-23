# MILETAP API
Basic Backend API Application for CRUD operation which is basically built using ***TypeScript, NodeJS, Express and Prisma***.

## Getting started
After cloning this repo locally, follow the steps below:
### 1. Install dependencies
```
$ cd miletap_api
$ npm install
```

### 2. Configure environment variables
Use the `.env.example` file which is located at the root of this project to setup the required configs which consist of following variables:
* PORT: for local dev server
* DATABASE_URL: datastore connection url.

### 3. Create and seed the database
Before executing the following commands please make sure that you've ***PostgreSQL*** instance up and running.
```
npx prisma migrate dev --name init
npm run prisma:seed
```

### 4. Start the REST API server
```
npm run dev
```
The server is now running on localhost at your specified port. Just go ahead and test out the CRUD API operations.
