// Code your solution here

//findMatching: Filters the array of drivers by checking if the driver's name matches the provided name (case-insensitive).
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  

  //fuzzyMatch: Filters the array of drivers by checking if the driver's name starts with the provided string (case-insensitive)
  function fuzzyMatch(drivers, query) {
   
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  
  // Filters the array of driver objects by checking if the name property matches the provided string (case-insensitive).
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
