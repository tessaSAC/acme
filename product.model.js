var _products = [
  { id: 1, name: 'Snacky Cakes' },
  { id: 2, name: 'Flexo Besto Trash Bags' },
  { id: 3, name: 'Pear Programmers' },
];

module.exports = {

  getProduct: function (id) {
    return this.getProducts().filter(function (product) {
      return product.id === id;
    })[0];
  },

  getProducts: function () {
    return _products;
  },

  updateProduct: function (id, data) {
    var product = this.getProduct(id);
    product.name = data.name;
  },

  addProduct: function (product) {

    var allProductIds = this.getProducts().map(function (product) {
        return product.id;
    });

    var maxId = Math.max.apply(allProductIds);
  
    product.id = maxId + 1;

    _products.push(product);

  },

  deleteProduct: function (id) {
    var idx = this.getProducts().indexOf(this.getProduct(id));
    this.getProducts().splice(idx, 1);
  }

};
