const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('inventory.db')



db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS products (name varchar(100), category varchar(60))")

    db.prepare('insert into products values(?,?)')
    .run('bar', 'baz')
})
db.close()