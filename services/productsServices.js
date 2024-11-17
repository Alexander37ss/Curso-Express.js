const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductService {
  constructor(){
    this.products = [];
    this.generate();
  }
  create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }
  generate() {
    const size = 100;
    for (let index = 0; index < size; index++) {
      this.products.push({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
      isBlock: faker.datatype.boolean()
    });
  }
  }
  find() {
    return this.products;
  }
  findOne(id) {
    const product = this.products.find(x => x.id === id);
    if(!product){
      throw boom.notFound('product not found');
    }
    if(product.isBlock){
      throw boom.conflict('product is block');
    }
      return product;
  }
  update(id, changes) {
    const index = this.products.findIndex(x => x.id = id);
    if(index == -1){
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index];
  }
  delete(id) {
    const index = this.products.findIndex(x => x.id = id);
    if(index == -1){
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return index;
  }
}

module.exports = ProductService;
