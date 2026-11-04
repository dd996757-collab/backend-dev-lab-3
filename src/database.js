const { DatabaseSync } = require('node:sqlite');

function createDatabase(databasePath) {
  const database = new DatabaseSync(databasePath);

  database.exec(`
    INSERT INTO books (title, author, price)
VALUES
('Wings of Fire', 'A. P. J. Abdul Kalam', 250),
('The Alchemist', 'Paulo Coelho', 299),
('Atomic Habits', 'James Clear', 450),
('Ikigai', 'Hector Garcia', 199),
('Deep Work', 'Cal Newport', 350),
('Rich Dad Poor Dad', 'Robert Kiyosaki', 399),
('The Psychology of Money', 'Morgan Housel', 499),
('Think and Grow Rich', 'Napoleon Hill', 299),
('The Power of Habit', 'Charles Duhigg', 320),
('Zero to One', 'Peter Thiel', 280);
  `);

  return database;
}

module.exports = { createDatabase };
