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
    it("calls the login user function", () => {
        const user = scooterApp.registerUser("Courtlyn", "test12", 33);
        scooterApp.loginUser("Courtlyn", "test12");
        expect(user.loggedIn).toBe(true);
    })
})

// log out
describe("logout user method test", () => {
    it("calls the logout user function", () => {
        const user = scooterApp.registeredUsers["Courtlyn"];
        scooterApp.logoutUser("Courtlyn");
        expect(user.loggedIn).toBe(false);
    })
})
beforeEach(() => {
    scooter = scooterApp.createScooter("Bankhead");
    user = scooterApp.registeredUsers["Queenie"];
})

//rent scooter
describe("scooter is rented out", () => {
    it("rents the scooter to the user", () => {
        scooterApp.rentScooter(scooter, user);
        expect(scooter.station).toBe(null);
    })
})

//dock scooter
describe('scooter is docked', () => {
    it("docks the scooter at its station", () => {
        scooterApp.rentScooter(scooter, user);
        scooterApp.dockScooter(scooter, "Bankhead");
        expect(scooter.station).toBe("Bankhead");
    })
})