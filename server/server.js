const express = require("express");
const usersRoute = require("./routes/users/usersRoute");
const accountRoute = require("./routes/accounts/accountRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
const globalErrHandler = require("./middlewares/globalErrHandler");
const cors = require("cors");
const app = express();
require("./config/dbConnect");
// middlewares
app.use(express.json()) //pass incoming data

// cors middleware

app.use(cors());
// routes

//  users route
app.use("/api/v1/users", usersRoute);

// account route
app.use("/api/v1/accounts", accountRoute);

// transction route
app.use("/api/v1/transactions", transactionsRoute);

// Error handlers
app.use(globalErrHandler);

//  listen to server
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
