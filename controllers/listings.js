const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
}
module.exports.renderNewForm = (req, res) => {

    res.render("./listings/new.ejs");
}
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author", } }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing You Request For Does Not Exist!");
        res.redirect("/listings");
    }
    res.render("./listings/show.ejs", { listing });
}
module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id;
    newlisting.image = { url, filename };
    await newlisting.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
}
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing You Request For Does Not Exist!");
        res.redirect("/listings");
    }
    let originalListing=listing.image.url;
   originalListing= originalListing.replace("/upload","/upload/w_250");
    res.render("./listings/edit.ejs", { listing,originalListing });
}
module.exports.updateListing = async (req, res) => {

    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    // means agar hamne file di hi nahi toh need req.file empty error throw hoga update mai
    if (typeof req.file!=="undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);

}
module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");

}
module.exports.filterByCategory = async (req, res) => {
    const categoryMap = {
    trending: "Trending",
    rooms: "Rooms",
    mountains: "Mountains",
    pools: "Pools",
    castles: "Castles",
    camping: "Camping",
    boats: "Boats"
};

    const key = req.params.category.toLowerCase();
    const category = categoryMap[key];

    if (!category) {
        return res.redirect("/listings");
    }

    const listings = await Listing.find({
        category: category
    });

    res.render("listings/index.ejs", { allListings: listings });
};
module.exports.searchListings = async (req, res) => {
    const query = req.query.q?.trim();
    if (!query) return res.redirect("/listings"); // no query, show all

    // Search by title or category (case-insensitive)
    const listings = await Listing.find({
        $or: [
            { title: { $regex: query, $options: "i" } },
            { category: { $regex: query, $options: "i" } }
        ]
    });

    res.render("listings/index", { allListings: listings });
};