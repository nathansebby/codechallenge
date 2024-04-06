function speedDetector(speed){

  if(speed<70) {
  
      return "Ok"
  }
  else {
  
      const demeritPoints = (speed -70)/5 ;
      if(demeritPoints>12) {
   
          return "License Suspended"
      }
      else {
          return `Points: $(demeritPoints)`
      }
  }
  
  }
  console.log(speedDetector(50))
