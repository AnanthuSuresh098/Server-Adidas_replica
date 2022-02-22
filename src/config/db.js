const mongoose = require(`mongoose`);
module.exports = () => {
    console.log("db connected")
  return mongoose.connect(
    "mongodb+srv://AnanthuSuresh:9061739040@cluster0.94wjc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};

// "mongodb+srv://AnanthuSuresh:9061739040@cluster0.94wjc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"