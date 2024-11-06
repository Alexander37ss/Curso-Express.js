const { faker } = require('@faker-js/faker');

class ProductService {
  constructor(){
    this.products = [];
    this.generate();
  }
  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }
  async generate() {
    const size = 100;
    for (let index = 0; index < size; index++) {
      this.products.push({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url()
    });
  }
  }
  async find() {
    return this.products;
  }
  async findOne(id) {
    return this.products.find(x => x.id === id);
  }
  async update(id, changes) {
      const index = this.products.findIndex(x => x.id = id);
      const product = this.products[index];
      this.products[index] = {
        ...changes,
        ...product
      }
      return this.products[index];
  }
  async delete(id) {
    const index = this.products.findIndex(x => x.id = id);
    if(index == -1){
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
    return index;
  }
}

module.exports = ProductService;
