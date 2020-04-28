import UserSpec from "./user"
describe("User", () => {
  test("name returns full name", () => {
    const user = new UserSpec({
      firstname: "Hamilton Gabriel",
      lastname: "Pinheiro",
    })
    expect(user.name).toBe("Hamilton Gabriel Pinheiro")
  })
})
