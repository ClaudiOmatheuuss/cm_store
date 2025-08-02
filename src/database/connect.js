const mongoose = require('mongoose');
const env = require('dotenv');

const connectToDatabase = async () => {
  try {
    mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.8g19qux.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    console.log("conexão concluida com sucesso");
  } catch (error) {
    console.log("erro na conexão: " + error);
  }
  ;
};

module.exports = connectToDatabase;