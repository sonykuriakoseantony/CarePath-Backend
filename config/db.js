const mongoose = require('mongoose');

const connectionString = process.env.CONNECTION_STRING;

mongoose.connect(connectionString).then(res=>{
    console.log("Connection establised with MongoDB Atlas");
}).catch(err=>{
    console.log("MongoDB Connection failed with error :");
    console.log(err);
})