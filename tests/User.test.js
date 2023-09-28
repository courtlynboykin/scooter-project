const User = require('../src/User');

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
  })
  // test password
  it("tests password", () => {
    expect(user.password).toBe("test123")
  })
  // test age
  it("returns their age" , () => {
    expect(user.age).toBe(21)
  })
})


// test login
  describe("loggedIn functions", () => {
    it("is user logged in", () => {
      user.login("test123");
      expect(user.loggedIn).toBe(true)
    })
  })

// test logout
describe("logs user out", () => {
  it("is user logged out", () => {
    user.logout();
  expect(user.loggedIn).toBe(false);
  })
})