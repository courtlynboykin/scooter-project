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