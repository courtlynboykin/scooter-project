const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor(){
    this.stations = {
      "Kensington" : [],
      "Lenox" : [],
      "Bankhead" : []
    }
    this.registeredUsers = {};
  }

  registerUser(username, password, age){
    if(this.registeredUsers[username]){
      throw new Error ("user is already registered");
    } else if(age < 18 ){
      throw new Error ("user is too young");
    } else {
      let newUser = new User(username, password, age);
      this.registeredUsers[username] = newUser;
      console.log("user has been registered");
      return newUser;
    }
  }
      
   
  loginUser(username, password){
    if(this.registeredUsers[username]){
      const currentUser = this.registeredUsers[username];
        currentUser.login(password);
        console.log("User has been logged in");
    }
  }
  
  
  logoutUser(username){
    if(this.registeredUsers[username]){
      const currentUser = this.registeredUsers[username];
      currentUser.logout();
  } 
  }

  createScooter(station){
    if(this.stations[station]){
      const newScooter = new Scooter(station);
    this.stations[station].push(newScooter);
    newScooter.station = station;
    console.log("created new scooter");
    return newScooter;
    } else {
      throw new Error("no such station")
    }
  }

  dockScooter(scooter, station){
    if(this.stations[station]){
    this.stations[station].push[scooter];
    scooter.dock(station);
    console.log("scooter is docked")
  }

  }

}
module.exports = ScooterApp
