# Installing dependencies

For server-side dependencies, go to the root folder and write the following command

```bash
npm install
```

Then change directory to `client` and execute

```bash
npm install
```

# Start server

In Root folder execute

```bash
npm start
```

# Start website

In `client` folder execute

```bash
npm start
```

# (Optional) Use Postgres

NOTE: You must have [Docker](https://www.docker.com/) installed.

Make sure Docker Desktop is turned on and in the root folder execute

```bash
docker-compose up -d
```

Now you can access Postgres database. However, no features were added to communicate with it.
