function getDetails(zName, zAge, zCountry) {
    
  function namePattern(zName) {
    let nameParts = zName.split(" ");
    return nameParts[0] + " " + nameParts[1].charAt(0).toUpperCase() + ".";
  }
  
  function ageWithMessage(zAge) {
    let age = zAge.split(" ");
    return "Your Age Is " + age[0];
  }
  
  function countryTwoLetters(zCountry) {
    return zCountry.slice(0, 2).toUpperCase();
  }
  
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`;
  }
  
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed Ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY



