const Product = require("../../models/product.model");

module.exports.index = async (req, res) => {
        const products = await Product.find({
                deleted: false
        });
        console.log(products);
        res.render('admin/pages/products/index', {
            pagetitle: "List of Products",
            products: products
        });
    
};