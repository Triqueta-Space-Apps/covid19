
exports.up = function(knex) {
    return knex.schema.createTable('posts', function(table){
        table.increments();
        table.string('news').notNullable();
        table.string('twitter').notNullable();
        table.string('info').notNullable();
        table.string('location').notNullable();
        table.string('date').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('posts')
};

