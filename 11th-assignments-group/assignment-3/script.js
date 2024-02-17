function ageInTime(theAge) {

    if(theAge > 10 && theAge < 100) {
        console.log(`Your age in month unit = ${theAge*12}`);
        console.log(`Your age in week unit = ${theAge*12*4}`);
        console.log(`Your age in day unit = ${theAge*12*4*7}`);
        console.log(`Your age in hour unit = ${theAge*12*4*7*24}`);
        console.log(`Your age in minute unit = ${theAge*12*4*7*24*60}`);
        console.log(`Your age in second unit = ${theAge*12*4*7*24*60*60}`);
    }
    else {
        console.log("Your age is out of allowed range!!!")
    }
}

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months