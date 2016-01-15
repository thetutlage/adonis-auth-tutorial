'use strict'

const Schema = use('Schema')

class Users extends Schema {
  up () {
    this.create('users', function (table) {
      table.increments('id')
      table.string('username', 60).unique()
      table.string('password', 80)
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = Users
