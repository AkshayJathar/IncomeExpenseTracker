const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://akshayjathar2611:akshay@cluster1.zbkeeri.mongodb.net/income-expense-app?retryWrites=true&w=majority"
    );
    console.log("Db connected successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

dbConnect();
