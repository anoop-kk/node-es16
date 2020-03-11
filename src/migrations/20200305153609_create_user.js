
exports.up = function (knex) {
    return knex.schema.createTable("user", function (table) {
        table.bigIncrements("id").unsigned().notNullable()
        table.uuid("uuid").notNullable()
        table.string("role", 32).notNullable()
        table.string("email", 64).notNullable()
        table.string("password_hash").notNullable()
        table.string("name", 64).notNullable()
        table.integer("user_status", 1).unsigned().notNullable().defaultTo(0)
        table.timestamp("last_login").nullable()
        table.biginteger("referral_id").unsigned().notNullable().defaultTo(0)
        table.unique("id")
        table.unique("email")
        table.timestamps(true, true)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable("user")
};
