module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/fb'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
