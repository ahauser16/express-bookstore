/** Common config for bookstore. */
require('dotenv').config();

let DB_URI;

//This checks the `NODE_ENV` environment variable.  If it is set to "test" then it appends `/bookstore-test` to the base URI resulting in `postgresql:///bookstore-test`.  This is typically used for running tests against a test database.
if (process.env.NODE_ENV === "test") {
  DB_URI = `${process.env.DATABASE_URL}/bookstore-test`;
  //If the `NODE_ENV` is not "test" then it checks if the `DATABASE_URL` environment variable is set. If it is, `DB_URI` is set to `DATABASE_URL`. If `DATABASE_URL` is not set, it defaults to `postgresql:///bookstore`.
} else {
  DB_URI = process.env.DATABASE_URL || `postgresql:///bookstore`;
}

console.log("DB_URI:", DB_URI); // Add this line to log the DB_URI to the console

module.exports = { DB_URI };