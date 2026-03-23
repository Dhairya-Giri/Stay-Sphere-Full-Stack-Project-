const mongoose = require("mongoose");
const initdata = require("./data.js")
const listing = require("../models/listing.js");
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
main().then(() => {
    console.log("connected to db");
})
    .catch((err) => console.log(err));
async function main(){
    await mongoose.connect(mongo_url);
}
const initdb=async()=>{
    // clearing the initial data if present
    await listing.deleteMany({});
    initdata.data=initdata.data.map((obj)=>({...obj,owner:"69c13cf65c72f8f3a97094a9"}));
    await listing.insertMany(initdata.data);
    console.log("data was initialized");
}
initdb();
