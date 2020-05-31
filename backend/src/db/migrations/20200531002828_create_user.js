exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.increments();
        table.string('email').notNullable();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('name').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.string('country').notNullable();
    });
    
};

exports.down = function(knex) {
  return knex.schema.dropTable()
};
