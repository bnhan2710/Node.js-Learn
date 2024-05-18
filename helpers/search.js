module.exports = (query) => {
      let objSearch = {
        keyword: "",
        regex : ""

      }
    if(query.keyword){
        objSearch.keyword = query.keyword;
        objSearch.regex = new RegExp(objSearch.keyword, 'i');
    }
    return objSearch
}