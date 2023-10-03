const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
    constructor() {
        this.stations = {
            "Kensington": [],
            "Lenox": [],
            "Bankhead": []
        }
        this.registeredUsers = {};
    }

    registerUser(username, password, age) {
        if (this.registeredUsers[username]) {
            throw new Error("user is already registered");
        } else if (age < 18) {
            throw new Error("user is too young");
        } else {
            let newUser = new User(username, password, age);
            this.registeredUsers[username] = newUser;
            console.log("user has been registered");
            return newUser;
        }
    }

    loginUser(username, password) {
        if (this.registeredUsers[username]) {
            const currentUser = this.registeredUsers[username];
            currentUser.login(password);
            console.log("User has been logged in");
        }
    }

    logoutUser(username) {
        if (this.registeredUsers[username]) {
            const currentUser = this.registeredUsers[username];
            currentUser.logout();
        }
    }

    createScooter(station) {
        if (this.stations[station]) {
            const newScooter = new Scooter(station);
            this.stations[station].push(newScooter);
            newScooter.station = station;
            console.log("created new scooter");
            return newScooter;
        } else {
            throw new Error("no such station");
        }
    }

    rentScooter(scooter, user) {
        let scooterFound = false;
        //Locate the given scooter at one of the stations,
        for (const station in this.stations) {
            if (this.stations[station]) {
                let stationArray = this.stations[station];
                if (stationArray.includes(scooter)) {
                    const index = station.indexOf(scooter);
                    stationArray.splice(index, 1); //and remove it from that station. 
                    scooter.rent(user);
                    console.log("The scooter has been rented") //Log scooter is rented to the console.
                    scooterFound = true;
                    break;
                }

            } else {
                throw new Error("Scooter is already rented");
            }
        }
    }

    //If the scooter is already rented, throw the error scooter already rented.
    dockScooter(scooter, station) {
        if (!this.stations[station]) {
            throw new Error("Station does not exist");
        } else {
            if (this.stations[station].includes(scooter)) {
                throw new Error("Scooter is already docked");
            } else {
                this.stations[station].push[scooter];
                scooter.dock(station);
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