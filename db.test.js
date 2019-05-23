const db = require('./db')

describe('The db integeration', () => {
  test.each([[1, 'Anders'],[2, 'Anna'],[3, 'Knut'],[4, 'Stina'],])
	('returns indiviual data for %d: %s', async (id, name) => {
		const user = await db.findOne(id)
		expect(user.id).toBe(id)
		expect(user.name).toBe(name)
	})
})
