const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
//   .then(() => {
//     console.log('connected')
//   })
//   .catch(err => {
//     console.log(err)
//   })


mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
  .then(() => {
    console.log('Mongoose connected')
    db.collection('people').drop(function(err, delOK) {
      if (err) throw err;
      if (delOK) console.log('People collection deleted')
      db.close()
  }).catch(err => {
    console.log(err)
  })
})