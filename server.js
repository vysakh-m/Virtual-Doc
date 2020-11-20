const express    = require("express");
const bodyParser = require("body-parser");
const mongoose   = require("mongoose");
const app        = express();
const passport   = require("passport");
const path       = require('path');

//Body-Parser
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);
app.use(bodyParser.json());

//MongoDB Authentication
const uri = require("./config/keys").mongo;
mongoose.connect(uri, {
  dbName: "octahacks",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Passport
app.use(passport.initialize());
require("./config/passport")(passport);

//Importing Routes
app.use("/user", require("./routes/user"));




// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }


const port=process.env.PORT||4000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
