const Dexie = require('dexie').default

module.exports = options => {
  const { indexedDB, IDBKeyRange } = options

  const db = new Dexie('TymlyDatabase', { indexedDB, IDBKeyRange })

  db.version(2).stores({
    startables: `&name, title, description, category, instigators`,
    todo: `&id, todoTitle, description`,
    logs: `++, message, date`,
    watching: `&subscriptionId, title, description`,
    auth: `&id, token`,
    favourites: `&id, favourites`,
    settings: `&id, settings`,
    cards: `&id`,
    executions: `&executionName, status`,
    search: `++, query`
  })

  return db
}
