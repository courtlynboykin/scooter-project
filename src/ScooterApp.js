const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
    constructor() {
        this.stations = { //an object whose keys are the names of the station locations & values are arrays of Scooters
            "Kensington": [],
            "Lenox": [],
            "Bankhead": []
        }
        this.registeredUsers = {};
    }

    registerUser(username, password, age) { 
        if (this.registeredUsers[username]) { 
            throw new Error("user is already registered"); //error is thrown if User is already registered
        } else if (age < 18) {
            throw new Error("user is too young"); //error is thrown if user is under 18
        } else {
            let newUser = new User(username, password, age); 
            this.registeredUsers[username] = newUser; //user is added to the registeredUsers object 
            console.log("user has been registered");
            return newUser;
        }
    }

    loginUser(username, password) {
        if (this.registeredUsers[username]) { 
            const currentUser = this.registeredUsers[username];
            currentUser.login(password); //the login method from the User class is called if user is registered
            console.log("User has been logged in");
        }
    }

    logoutUser(username) {
        if (this.registeredUsers[username]) {
            const currentUser = this.registeredUsers[username];
            currentUser.logout(); //the logout method from the User class is called if user is registered 
        }
    }

    createScooter(station) {
        if (this.stations[station]) { 
            const newScooter = new Scooter(station); //if the station exists a new Scooter is created
            this.stations[station].push(newScooter); //the new Scooter is added to the Station object it belongs to
            newScooter.station = station;
            console.log("created new scooter");
            return newScooter;
        } else {
            throw new Error("no such station");
        }
    }

    rentScooter(scooter, user) {
        let scooterFound = false;
        for (const station in this.stations) { //Locate the given scooter at one of the stations
            if (this.stations[station]) { 
                let stationArray = this.stations[station]; //variable holds the current station array
                if (stationArray.includes(scooter)) { //looks for the scooter in that station
                    const index = station.indexOf(scooter); //holds the index of the given scooter
                    stationArray.splice(index, 1); //removes the scooter from that station using the index
                    scooter.rent(user); //calls the rent method from the Scooter class on the scooter
                    console.log("The scooter has been rented") 
                    scooterFound = true;
                    break;
                }
            } else {
                throw new Error("Scooter is already rented");
            }
        }
    }

    dockScooter(scooter, station) {
        if (!this.stations[station]) {
            throw new Error("Station does not exist"); //throws an error if the station does not exist
        } else {
            if (this.stations[station].includes(scooter)) { 
                throw new Error("Scooter is already docked"); //throws an error if the station already includes the scooter
            } else {
                this.stations[station].push[scooter]; //pushes the scooter in the given station array
                scooter.dock(station); //calls the dock method from the Scooter class 
                console.log("scooter is docked");
            }
        }
    }

    print() {
        console.log(this.registeredUsers);
        console.log(this.stations);
    }
}




module.exports = ScooterApp