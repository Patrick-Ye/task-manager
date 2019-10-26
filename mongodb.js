const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   name: 'Peng',
  //   age: 27
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }

  //   console.log(result.ops)
  // })
  
  // db.collection('users').insertMany([
  //   {
  //     name: 'Jack',
  //     age: 24
  //   }, {
  //     name: 'Rose',
  //     age: 23
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert users')
  //   }

  //   console.log(result.ops)
  // })

  db.collection('tasks').insertMany([
    {
      description: 'A',
      completed: true
    }, {
      description: 'B',
      completed: false
    }, {
      description: 'C',
      completed: true
    }
  ], (error, result) => {
    if (error) {
      return console.log('Unable to insert tasks')
    }

    console.log(result.ops)
  })
})