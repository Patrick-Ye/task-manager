// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  const updatePromise = db.collection('users').updateOne({
    _id: new ObjectID("5db41c1269d63a1361b63bff")
  }, {
    $set: {
      name: 'Andrew'
    }
  })

  updatePromise.then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })
})