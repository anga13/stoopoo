module.exports = {
  async all() {
    return employees
  },
  async findOne(id) {
    let index = id -1
    return employees[index]
  }
}
employees = [
  {id:1, name: 'Anders'},
  {id:2, name: 'Anna'},
  {id:3, name: 'Knut'},
  {id:4, name: 'Stina'}
]
