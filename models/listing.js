const mongoose = require("mongoose");
const review = require("./review");
const User=require("./user");
const Schema = mongoose.Schema;
const listingSchema =  new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    image: {
        url:String,
        filename:String,
    },
    price: Number,
    location: String,
    country: String,
    category:[ {
        type: String,
        enum: ["Trending", "Rooms", "Mountains", "Pools", "Castles", "Camping","Boats"],
        required: true
    }],
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    
}
);
// if we want to delete a listing then for it's review to get deleted
listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
    await review.deleteMany({_id:{$in:listing.reviews}});
    }

})
const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;