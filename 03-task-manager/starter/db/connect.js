const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://john:1234@nodeexpressproject.viwrjth.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

// connect to db
mongoose
  .connect(connectionString, {
    // remove deprecation warning : version 6 above don't need this
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNTECTED TO THE DB.."))
  .catch((err) => console.log(err));
