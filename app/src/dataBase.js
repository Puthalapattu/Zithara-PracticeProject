const mongoose = require("mongoose");

const dbUrl =
  "mongodb+srv://puthlapattudeepak:EacvTjvbY9wpjirh@cluster0.wqas44i.mongodb.net/";

async function ConnectToDB() {
  try {
    await mongoose.connect(dbUrl, { family: 4 });

    console.log(`Connection is Success, Connected to DB`);
  } catch (error) {
    console.log(`Error ${error} occured while connecting to DataBase`);
  }
}

module.exports = ConnectToDB;

// mongodb+srv://puthlapattudeepak:EacvTjvbY9wpjirh@cluster0.wqas44i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// password : EacvTjvbY9wpjirh
// mongodb+srv://puthlapattudeepak:EacvTjvbY9wpjirh@cluster0.wqas44i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
