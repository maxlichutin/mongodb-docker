db.test.drop();
db.test.insertMany([
  {
    _id: 1,
    title: 'Hello world!',
    body: 'This is a test',
    created: Date()
  },
  {
    _id: 2,
    title: 'Hello Mongo!',
    created: Date()
  }
])