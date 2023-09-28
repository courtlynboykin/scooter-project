const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  const scooter = new Scooter("Kensington");
  it('Scooter class should create Scooter instance', () => {
    
    expect(scooter).toBeInstanceOf(Scooter);
  });
  it('returns the station name', () => {
    expect(scooter.station).toBe("Kensington")
  })
});
//Method tests
describe('scooter methods', () => {
  // tests here!
  const scooter = new Scooter("Kensington");
  const user = new User("Joe Bloggs", "test123", 21);
  //rent method 
  it('rents the scooter out', () => {
   
    scooter.rent(user);
    expect(scooter.user).toBe("Joe Bloggs");
    expect(scooter.station).toBe(null); 
  })

  //dock method
  it('docks the scooter', () => {
    const user = new User("Joe Bloggs", "test123", 21);
    scooter.dock("Kensington");
    expect(scooter.station).toBe("Kensington");
    expect(scooter.user).toBe(null);

  })
  //requestRepair method

  //charge method

})