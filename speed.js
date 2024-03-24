function checkspeed(speed){
  const speedlimit= 70;
  const demeritpoints =Math.max(0,Math.floor((speed-speedlimit)/5));

if (speed <=speedlimit){
  return "ok";
  else if(demeritpoints> 12){
    return"license suspended";
  }else{
    return `Points:{demeritPoints}`;
  }
  
  }
  }
}
}
const carSpeed =Number(prompt("Enter Car speed (km/h):"));
  const result =checkspeed(carSpeed)
  console.log (result);