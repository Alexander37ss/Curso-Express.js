const { faker } = require('@faker-js/faker');

class CategoriesService {
  constructor(){
    this.category = [];
    this.generate();
  }
  create(data) {
    const newCategory = {
      ...data
    }
    this.category.push(newCategory);
    return newCategory;
  }
  generate() {
    const size = 10;
    for (let index = 0; index < size; index++) {
      this.category.push({
      id: faker.string.uuid(),
      name: faker.commerce.productMaterial(),
      image: faker.image.url()
    });
  }
  }
  find() {
    return this.category;
  }
  findOne(id) {
    return this.category.find(x => x.id === id);
  }
  update(id, changes) {
    const index = this.category.findIndex(x => x.id = id);
    if(index == -1){
      throw new Error('Product not found');
    }
    const category = this.category[index];
    this.category[index] = {
      ...category,
      ...changes
    }
    return this.category[index];
  }
  delete(id){
    const index = this.category.findIndex(x => x.id = id);
    if(index == -1){
      throw new Error('Product not found');
    }
    this.category.splice(index, 1);
    return index;
  }
}

module.exports = CategoriesService;
