class UserSpec {
  constructor (details) {
    const { firstname, lastname } = details
    this.firstname = firstname
    this.lastname = lastname
  }

  get name () {
    return `${this.firstname} ${this.lastname}`
  }
}

describe('User', () => {
  test('name returns full name', () => {
    const user = new UserSpec({ firstname: 'Hamilton', lastname: 'Gabriel' })
    expect(user.name).toBe('Hamilton Gabriel')
  })
})
