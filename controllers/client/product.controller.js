const Product = require("../../models/product.model");

module.exports.index = async (req, res) => {
    try {
        const products = await Product.find({
            status: "active",
            deleted: false
        });
        const newProducts = products.map(item => {
           item.pricenew = (item.price - item.price * item.discountPercentage / 100).toFixed(0);
           return item
        });
        console.log(products);
        res.render('client/pages/products/index', {
            pagetitle: "List of Products",
            products: newProducts
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
};
