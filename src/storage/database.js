const MongoClient = require('mongodb').MongoClient
const { promisify } = require('util')

const logger = require('../utils/logger')

function Database (config) {
  if (!(this instanceof Database)) {
    return new Database(config)
  }

  const _config = config
  let _db = null;

  (async function connect () {
    try {
      const connectAsync = promisify(MongoClient.connect).bind(MongoClient)
      const client = await connectAsync(process.env.COSMOS_DB_URI || _config.url)

      _db = client.db(_config.name)

      if (!_db) {
        logger.error({ label: 'DATABASE', message: "can't establish mongo connection reason: null client" })
        setTimeout(connect, 1000)
      } else {
        logger.info({ label: 'DATABASE', message: 'successful establish DB connection' })
      }
    } catch (e) {
      logger.error({ label: 'DATABASE', message: e.message })
      setTimeout(connect, 1000)
    }
  })()

  process.on('SIGTERM', () => {
    _db.close()
  })

  this.insert = async (name, content) => {
    const collection = _db.collection(name)
    const updateAsync = promisify(collection.updateOne).bind(collection)

    return updateAsync({ email: content.email }, { $set: { rss: content.rss } }, { upsert: true })
  }

  this.find = async (name, item) => {
    const collection = _db.collection(name)
    const findAsync = promisify(collection.findOne).bind(collection)

    return findAsync({}, { email: item })
  }

  this.update = async (name, oldContent, newContent) => {
    const collection = _db.collection(name)
    const updateAsync = promisify(collection.updateOne).bind(collection)

    return updateAsync(oldContent, newContent)
  }

  this.remove = async (name, content) => {
    const collection = _db.collection(name)
    const deleteAsync = promisify(collection.deleteOne).bind(collection)

    return deleteAsync(content)
  }
}

module.exports = Database
