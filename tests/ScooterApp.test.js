const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp();
// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
  it("Should return instance of User", () => {
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });
});         
// log in
describe("login user method test", () => {
    scooterApp.registerUser("Courtlyn", "test12", 33);
    it("calls the login user function" , () => {
    let response = scooterApp.registeredUsers["Joe Bloggs"];
    scooterApp.loginUser("Joe Bloggs", "test123");
      expect(response.loggedIn).toBe(true);
    })
  })
// log out

// rent scooter
//describe('scooter is rented', () => {
//  it('removes the scooter from the station', () => {
//    expect()
//  })
//})

// dock scooter