// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      database: 'tumblr'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    // The next line is where the application will read that environment variable to connect to the database
    connection: 'postgres://tdumfhpokwwudo:e410a84b53f203be92e58beec14376c0db333b1f19a98bfde4eea0670b3f80ab@ec2-174-129-18-42.compute-1.amazonaws.com:5432/d99kfk37kqqtm6',
    // migrations: {
    //   directory: __dirname + '/migrations',
    // },
    // seeds: {
    //   directory: __dirname + '/seeds',
    // },
  },
}
