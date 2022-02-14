// conexion base de datos, creo el string para conectar y lo ejecuto via promesa, con sus respectivo catch por si hay falla en la conexion

const mongoose = require("mongoose");


const connectDB = (url) => {
  return
  mongoose.connect(url, {
    //esto es para los warning no hace falta en la version 6
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB