module.exports.index = (req, res) => {
        res.render('client/pages/products/index',{
            pagetitle : "Product Page",
        });
    }