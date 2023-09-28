const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor(stations, registeredUsers){
    this.stations = {
      "Kensington" : [],
      "Lenox" : [],
      "Bankhead" : []
    }
    this.registeredUsers = {
      
    }
  }
  registerUser(username, password, age){
    if(//user is not in registered users & age >= 18 ){
      //add to registered users 
    } else if //user is in registered users{
      throw new Error ("user is already registered");
    } else {
      throw new Error ("user is too young")
    }

  }
 
}

module.exports = ScooterApp
