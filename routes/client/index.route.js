const productRouter = require('./product.route')
const homePageRouter =  require('./home.route')
module.exports = (app) => {
    app.use('/', homePageRouter)
    app.use('/products', productRouter)
}