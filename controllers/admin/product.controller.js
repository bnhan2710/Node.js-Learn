const Product = require("../../models/product.model");
const filterStatusHelper = require("../../helpers/filterStatus");
const paginationHelper = require("../../helpers/pagination.helper");
const systemConfig = require("../../config/system");

// [GET] /admin/products/
module.exports.index = async (req, res) => {
  try {
    const find = {
      deleted: false
    }
    
    // Status Filter
    const filterStatus = filterStatusHelper(req.query);
    if(req.query.status) {
      find.status = req.query.status;
    }
    // End Status Filter

    // Search
    if(req.query.keyword) {
      const regex = new RegExp(req.query.keyword, "i");
      find.title = regex;
    }
    // End Search

    // Pagination
    const countProducts = await Product.countDocuments(find);
    const objectPagination = paginationHelper(6, req.query, countProducts);
    // End Pagination

    const products = await Product.find(find)
      .limit(objectPagination.limitItems)
      .skip(objectPagination.skip);
    
    res.render("admin/pages/products/index", {
      pageTitle: "Danh sách sản phẩm",
      products: products,
      filterStatus: filterStatus,
      keyword: req.query.keyword,
      pagination: objectPagination,
      startID : objectPagination.skip
    });
  } catch (error) {
    console.log(error);
    res.redirect(`/${systemConfig.prefixAdmin}/products`);
  }
}