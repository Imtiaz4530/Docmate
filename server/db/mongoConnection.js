const { default: mongoose } = require("mongoose");

const mongodbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Database Connected 😍");
  } catch (e) {
    console.log("MongoDB connection error 😥 ----> ", e.message);
  }
};

module.exports = mongodbConnection;
