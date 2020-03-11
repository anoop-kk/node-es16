module.exports = {
    client: "mysql2",
    connection: {
        host: 'db',
        user: 'root',
        password: '!@#123',
        database: 'api_services'
    },
    migrations: {
        directory: './src/migrations'
    },
    seeds: {
        directory: './src/seeds'
    }
};