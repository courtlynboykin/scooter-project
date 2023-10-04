//const User = require('./User')
class Scooter {
  static nextSerial = 1;
  constructor(station) {
      this.station = station;
      this.user = null;
      this.serial = Scooter.nextSerial;
      Scooter.nextSerial += 1;
      this.charge = 100;
      this.isBroken = false;
  }

  rent(user) {
    //if the scooter is charged above 20% & not broken, it is checked out to user; otherwise, an error is thrown based on need to charge or repair
      if (this.charge > 20 && this.isBroken == false) { 
          this.station = null;
          this.user = user;
      } else if (charge <= 20) {
          throw new Error('Scooter needs to charge');
      } else {
          throw new Error('Scooter needs repair');
      }
  }

  dock(station) {
      this.station = station;
      this.user = null;
  }
}

module.exports = Scooter