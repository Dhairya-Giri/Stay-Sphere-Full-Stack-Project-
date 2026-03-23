const express=require("express");
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const listingController=require("../controllers/listings.js");
const multer  = require('multer');
const{storage}=require("../cloudConfig.js");

const upload = multer({ storage })

router
.route("/")
// index route
.get( wrapAsync(listingController.index))
// create route
.post(isLoggedIn,validateListing,upload.single("listing[image]"), wrapAsync(listingController.createListing));
// new 
//because when placed below show route it searches for new as id 
router.get("/new",isLoggedIn, listingController.renderNewForm);
router.get("/category/:category", wrapAsync(listingController.filterByCategory));
router.get("/search", wrapAsync(listingController.searchListings));
router.route("/:id")
.get( wrapAsync(listingController.showListing))
.put(isLoggedIn, isOwner,upload.single("listing[image]"),validateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));
// update route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm)); 
module.exports=router;  