function calculateGrade(mark){
  if (mark > 79){
    return 'A';
  }else if (mark >= 60){
      return 'B'
  }else if (mark >= 50){
      return 'C'
      }else (mark< 40) 
      return "E"
      }
    


function main() {
  if(true){
    let input= prompt("ENTER THE STUDENT Marks(between 0 and 100);"
    let mark = parseFloat(input);

    if(Boolean(mark) && mark >= 0 && mark <= 100){
      let grade= calculateGrade(mark);
      alert(`The grade for ${mark}is${grade}`);
    }
    else{
      alert("please enter a valid mark between 0 and 100.");
    }
  }
}
main();