const request = require('supertest')
const app = require('../../app')

let response 
describe('employee list endpoint', () => {
  beforeAll(async () => {
    response = await request(app).get('/employees');
  })
  test('returns status code 200', async () => {
    expect(response.statusCode).toBe(200)
  })
  test('returns list of employees', async () => {
    expect(response.body.length).toBe(4)
  })
})

describe('employee detail endpoint', () => {
  test.each([[1, 'Anders'],[2, 'Anna'],[3, 'Knut'],[4, 'Stina'],])('returns status code 200 for %d: %s', async (id, name) => {
    response = await request(app).get(`/employees/${id}`)
    expect(response.statusCode).toBe(200)
  })
  test.each([[1, 'Anders'],[2, 'Anna'],[3, 'Knut'],[4, 'Stina'],])('returns employee %d: %s', async (id,name) => {
    response = await request(app).get(`/employees/${id}`)
    expect(response.body.name).toBe(name)
    expect(response.body.id).toBe(id)
  })
})

