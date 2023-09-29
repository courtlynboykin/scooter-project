const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor(stations, registeredUsers){
    this.stations = {
      "Kensington" : [],
      "Lenox" : [],
      "Bankhead" : []
    }
    this.registeredUsers = {};
  }

  registerUser(username, password, age){
    if(!this.registeredUsers.hasOwnProperty(username) && age >= 18 ){
      let newUser = new User(username, password, age);
      this.registeredUsers[newUser.username] = {
        password: newUser.password,
        age: newUser.age
      };
      console.log("user has been registered");
      return newUser;
      
    }  else if(this.registeredUsers.hasOwnProperty(username)){
       throw new Error ("user is already registered");
    } else {
      throw new Error ("user is too young");
    }
  }
 
  loginUser(username, password){
    if(this.registeredUsers.hasOwnProperty(username)){
      const currentUser = this.registeredUsers[username];
      if(currentUser.password === password){
        currentUser.login();
        console.log("User has been logged in");
      } else {
        throw new Error("Incorrect password");
      }
    } else {
      throw new Error("User not found");
    }
  }
  
  logoutUser(username){
    if(this.registeredUsers.hasOwnProperty(username)){
      const currentUser = this.registeredUsers[username];
      currentUser.logout();
  } 
  }
  createScooter(station){
    if(this.stations.hasOwnProperty(station)){
      const newScooter = new Scooter(station);
    this.stations.push[newScooter];
    newScooter.station = station;
    console.log("created new scooter");
    return newScooter;
    } else {
      throw new Error("no such station")
    }
  }

  dockScooter(scooter, station){
    if(this.stations.hasOwnProperty(station)){
    this.stations.push[scooter];
    scooter.dock(station);
    console.log("scooter is docked")
  } else if(){

  }
}
module.exports = ScooterApp
