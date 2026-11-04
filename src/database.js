const sqlite3 = require('better-sqlite3')
const path = require('path')

const dbPath = path.join(__dirname, '..', 'books.db')
const database = new sqlite3(dbPath)

const createDatabase = () => {
  database.exec(`
    CREATE TABLE IF NOT EXISTS books (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      author TEXT NOT NULL,
      price REAL NOT NULL
    );
  `)

  console.log('Books table created successfully')
}

createDatabase()

module.exports = database
