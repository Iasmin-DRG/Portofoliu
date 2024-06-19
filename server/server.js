const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
// var bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(cors())


// Import the mongoose module
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

// Define the database URL to connect to.
// co
const mongoDB = "mongodb://u9aarciboebpuyfm8b9q:ILhT2R5SYwlRwmbiPv7@bodkywlnytccccejtv7r-mongodb.services.clever-cloud.com:2578/bodkywlnytccccejtv7r";
mongoose.connect(mongoDB,{dbName: 'bodkywlnytccccejtv7r',  user:'u9aarciboebpuyfm8b9q', pass:'ILhT2R5SYwlRwmbiPv7'})
.then((result)=>{
    // console.log('k')
    const SomeModelSchema = new Schema({
        contactName: String,
        contactEmail: String,
        message: String,
    });
    
    // Compile model from schema
    const SomeModel = mongoose.model("Contact", SomeModelSchema,'Contact');

app.post('/createContact', (req, res) => {
    const body = req.body;
    // console.log('bdy: ',body)        
        const contactDoc ={contactName: body.contactName, contactEmail: body.contactEmail, message: body.message}
        // console.log()
        // console.log('c: ', contactDoc)
        // console.log()
        return SomeModel.create(contactDoc)
        .then((createdDoc)=>{
            console.log(createdDoc)
            res.send('OK')
        })
    })



//   res.send('OK')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})