const Product = require("../../models/product.model");

//[GET] /admin/products
module.exports.index = async (req, res) => { const filterState = [
    {
      name: "Tất cả",
      status: "",
      class: ""
    },
    {
      name: "Hoạt động",
      status: "active",
      class: ""
    },
    {
      name: "Dừng hoạt động",
      status: "inactive",
      class: ""
    }
  ];

  if(req.query.status) {
    const index = filterState.findIndex(item => item.status == req.query.status);
    filterState[index].class = "active";
  } else {
    filterState[0].class = "active";
  }

  // console.log(filterState);

  const find = {
    deleted: false,
  }

  if(req.query.status) {
    find.status = req.query.status;
  }
  let keyword = "";
if(req.query.keyword){
    keyword = req.query.keyword;
    find.title = new RegExp(keyword, 'i');
    
}


        const products = await Product.find(find);
        // console.log(products);
        res.render('admin/pages/products/index', {
            pageTitle: "Danh sách sản phẩm",
            products: products,
            filterState: filterState,
            keyword : keyword
        });
    
};
